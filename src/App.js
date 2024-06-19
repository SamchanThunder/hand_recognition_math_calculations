import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose"
import * as fp from "fingerpose";
import Webcam from "react-webcam";
import React, {useRef, useState} from 'react';
import {drawHand} from "./draw";
import {one,two,three,four,five,six,seven,eight,nine} from "./numbers.js";
import './App.css';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const hand = async () =>{
    const x = await handpose.load();

    setInterval(()=>{
      isHand(x)
    }, 100)
  };

  const isHand = async(x) =>{
    if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4){
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;


      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const object = await x.estimateHands(video);

      const ctx = canvasRef.current.getContext("2d");
      drawHand(object, ctx);

      if(object.length > 0){
        const GE = new fp.GestureEstimator([
          one,
          two,
          three,
          four,
          five,
          six,
          seven,
          eight,
          nine
        ]);

        const gesture = await GE.estimate(object[0].landmarks, 8.5);
console.log(gesture);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          
          let newNum = gesture.gestures[maxConfidence].name;
          document.getElementById('number').innerHTML = newNum;
        }
      }else{
        document.getElementById('number').innerHTML = "No Hand Detected";
      }
    }
  };

  hand();

  return (
    <div className="App">
      <header className="App-header">
      <Webcam
          ref={webcamRef}
          id="camera"
          style={{
            position: "absolute",
          }}
        />

        <canvas
          ref={canvasRef}
          id="camera"
          style={{
            position: "absolute",
          }}
        />

        <div id="number">No Hand Detected</div>
      </header>
    </div>
  );
}

export default App;
