const electron = require("electron");
const { ipcRenderer } = electron;

require("@tensorflow/tfjs");
require("@tensorflow/tfjs-backend-cpu");

const cocoSSD = require("@tensorflow-models/coco-ssd");
const { input } = require("@tensorflow/tfjs");

let model;

const titleBarBtns = Array.from(document.getElementsByClassName("title-bar-btn"));
const mainContainer = document.getElementById("main-container");
const loader = document.getElementById("loader");
const choiceContainer = document.getElementById("input-choice-container");
const inputChoices = Array.from(document.getElementsByClassName("input-choice"));
const inputModal = document.getElementById("input-modal");

window.onload = async () => {
    Particles.init({
        selector: '#particles-bg',
        color: "#CCCCCC",
        connectParticles: true,
        speed: 0.6,
        minDistance: 150
    });

    model = await cocoSSD.load('lite_mobilenet_v2');
    console.log("model loaded");

    loader.classList.add("hidden");
    choiceContainer.classList.remove("hidden");
    choiceContainer.classList.add("flex-container");
};

titleBarBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        ipcRenderer.send("action:main", btn.getAttribute("data-action"));
    });
});

inputChoices.forEach((inputChoice) => {
    inputChoice.addEventListener("click", (event) => {
        const inputChoiceID = inputChoice.getAttribute("id");
        inputChoiceID === "input-choice-w" ?  predictWebcam() : toggleInputModal(inputChoiceID);
    });
});

const toggleInputModal = (inputChoiceID) => {
    mainContainer.style.filter = "blur(5px)";
    ipcRenderer.send("render:modal", inputChoiceID);
};

const predictWebcam = () => {
    console.log("webcam")
    choiceContainer.style.display = "none";
}

const predictFile = () => {
    choiceContainer.style.display = "none";
}

ipcRenderer.on("close:modal", (event) => {
    mainContainer.style.filter = "none";
});

ipcRenderer.on("upload:modal", (event, filePath) => {
    console.log(filePath);
    mainContainer.style.filter = "none";
    predictFile();
});

const toggleVisibility = (element) => {
    element.classList.contains("hidden") ? element.classList.remove("hidden") : element.classList.add("hidden");
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