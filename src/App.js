import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose"
import * as fp from "fingerpose";
import Webcam from "react-webcam";
import React, {useRef} from 'react';
import {drawHand} from "./draw";
import { numString } from "./strToNum.js";
import {one,two,three,four,five,six,seven,eight,nine} from "./numbers.js";
import './App.css';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  let arrayNumbers = [];
  let addNumbers = [];
  let statement = '';
;
  const hand = async () =>{
    const x = await handpose.load();

    setInterval(()=>{
      isHand(x)
    }, 100)
  };

  const isNumber = async () =>{
    setInterval(()=>{
      if(arrayNumbers.length > 0){
        let m = new Map();

        for (const i in arrayNumbers) {
          if (!m.get(arrayNumbers[i])) m.set(arrayNumbers[i], 1);
          else {
              m.set(arrayNumbers[i], m.get(arrayNumbers[i]) + 1);
          }
        }
        let max = 0;
        let predictedNumber;
        m.forEach((val, key, map) => {
          if (max < val) {
              max = val;
              predictedNumber = key;
        }
      });

      statement += predictedNumber + " + ";
      document.getElementById('number').innerHTML = statement;
      addNumbers.push(predictedNumber);
      arrayNumbers = []; 
    }
    }, 2000)
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
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          
          let newNum = gesture.gestures[maxConfidence].name;
          newNum = numString(newNum);
          arrayNumbers.push(newNum);
        }
      }else{
        document.getElementById('number').innerHTML = statement;
        arrayNumbers = [];
      }
    }
  };

  function summation(){
    let localSum = 0;
    for(let x = 0; x < addNumbers.length; x++){
      localSum += addNumbers[x];
    }
    document.getElementById('answer').innerHTML = "Answer: " + localSum;
    
  }

  function refresh(){
    statement = "";
    document.getElementById('number').innerHTML = statement;
    addNumbers = [];
    document.getElementById('answer').innerHTML = "Answer: "
  }

  hand();
  isNumber();

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

        <div id="number">Loading...</div>
        <div id="answer">Answer: </div>
        <div id="box">
          <button onClick={summation} id="sum" name="sum">SUM</button>
          <button onClick={refresh} id="ref" name="ref">REFRESH</button>
        </div>
        <div id="info"><u>Info: Use Abascus Number Hand Method; Side of Palm to Camera</u></div>
      </header>
    </div>
  );
}

export default App;