export const drawHand =(predictions, ctx) =>{
    if(predictions.length > 0){
        predictions.forEach((prediction)=>{
            const landmarks = prediction.landmarks;

            for(let n = 0; n < landmarks.length; n++){
                const x = landmarks[n][0];
                const y = landmarks[n][1];
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3 *Math.PI);
                ctx.fillStyle = "#9aff7b";
                ctx.fill();
            }
        })
    }
}