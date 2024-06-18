import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam";
import React, {useRef} from 'react';
import {drawHand} from "./draw";
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
      console.log(object);

      const ctx = canvasRef.current.getContext("2d");
      drawHand(object, ctx);
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
      </header>
    </div>
  );
}

export default App;
