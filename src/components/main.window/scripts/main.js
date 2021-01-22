require("@tensorflow/tfjs");
require("@tensorflow/tfjs-backend-cpu");

const cocoSSD = require("@tensorflow-models/coco-ssd");

let model;

const loader = document.getElementById("loader");
const choiceContainer = document.getElementById("input-choice-container");

window.onload = async () => {
    Particles.init({
        selector: '#particles-bg',
        color: "#CCCCCC",
        connectParticles: true,
        speed: 0.6,
        minDistance: 150
    });

    model = await cocoSSD.load('lite_mobilenet_v2')
    console.log("model loaded");

    loader.classList.add("hidden");
    choiceContainer.classList.remove("hidden");
    choiceContainer.classList.add("flex-container");
};


// const btns = Array.from(document.getElementsByClassName("input-btn"));
        // const sourceInputContainers = Array.from(document.getElementsByClassName("source-input-container"));
        // const submitBtns = Array.from(document.getElementsByClassName("input-submit-btn"));
        // const video = document.getElementById("input-rt-video");
        // let videoStream;

        // btns.forEach((btn) => {
        //     btn.addEventListener("click", (event) => {
        //         sourceInputContainers.forEach((container) => {
        //             console.log(container.getAttribute("data-btn"), btn.getAttribute("id"))
        //             container.getAttribute("data-btn") === btn.getAttribute("id") ? container.classList.remove("hidden") : container.classList.add("hidden");
        //         });
 
        //         if(btn.getAttribute("id") === "rt-btn") {
        //             webcamInit();
        //         } else {
        //             videoStream.getTracks().forEach(function(track) {
        //                 track.stop();
        //             });
        //         }
        //     });
        // });

        // submitBtns.forEach((submitBtn) => {
        //     submitBtn.addEventListener("click", (event) => {
        //         console.log(document.getElementById(submitBtn.getAttribute("data-input")).files[0].path);
        //     });
        // });
        

        // predictWithCocoModel = async () => {
        
        //     detectFrame(video, model);
        // }

        // detectFrame = (video, model) => {
        //     model.detect(video).then(predictions => {
        //         document.querySelector("p").classList.add("hidden");
        //         renderPredictions(predictions);
        //         requestAnimationFrame(() => {
        //             detectFrame(video, model);
        //         });
        //     });
        // }

        // webcamInit = () => {
        //     errorCallback = (e) => {
        //         console.log('Error', e);
        //     }

        //     navigator.getUserMedia({video: true, audio: false}, (localMediaStream) => {
        //         videoStream = localMediaStream;
        //         video.srcObject = videoStream;

        //         // video.onloadedmetadata = (e) => {
        //         //     predictWithCocoModel();
        //         // };
        //     }, errorCallback);
        // }

        // renderPredictions = (predictions) => {
        //     const canvas = document.querySelector("canvas");
        //     const ctx = canvas.getContext("2d");

        //     canvas.width  = 600;
        //     canvas.height = 600;

        //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        //     // Font options.
        //     const font = "16px sans-serif";
        //     ctx.font = font;
        //     ctx.textBaseline = "top";
        //     ctx.drawImage(video,0,0);

        //     predictions.forEach(prediction => {
        //         const x = prediction.bbox[0];
        //         const y = prediction.bbox[1];
        //         const width = prediction.bbox[2];
        //         const height = prediction.bbox[3];
        //         // Draw the bounding box.
        //         ctx.strokeStyle = "#00FFFF";
        //         ctx.lineWidth = 2;
        //         ctx.strokeRect(x, y, width, height);
        //         // Draw the label background.
        //         ctx.fillStyle = "#00FFFF";
        //         const textWidth = ctx.measureText(prediction.class).width;
        //         const textHeight = parseInt(font, 10); // base 10
        //         ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
        //     });

        //     predictions.forEach(prediction => {
        //         const x = prediction.bbox[0];
        //         const y = prediction.bbox[1];
        //         // Draw the text last to ensure it's on top.
        //         ctx.fillStyle = "#000000";
        //         ctx.fillText(prediction.class, x, y);
        //     });
        // };

        // webcamInit();