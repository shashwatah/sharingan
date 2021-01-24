const electron = require("electron");
const { ipcRenderer } = electron;

const dragDropContainer = document.getElementById('drag-drop-container');
const dragDropText = document.getElementById('drag-drop-text');
const cancelBtn = document.getElementById("cancel-btn");
const uploadBtn = document.getElementById("upload-btn");

let fileTypes, mediaType, filePath; 

ipcRenderer.on("data:inputChoiceID", (event, inputChoiceID) => {
    console.log(inputChoiceID)
    if(inputChoiceID === "input-choice-i") { 
        mediaType = "image";
        fileTypes = ["image/png", "image/jpeg"];
        dragDropText.innerText = "Drag your Image here";
    } else {
        mediaType = "video";
        fileTypes = ["video/avi", "video/mp4"];
        dragDropText.innerText = "Drag your Video here";
    }

    initDragDrop();
});

const initDragDrop = () => {
    dragDropContainer.ondragover = () => {
        dragDropContainer.style.background = "rgba(0,0,0,0.6)";
        return false;
    };

    dragDropContainer.ondragleave = () => {
        dragDropContainer.style.background = " rgba(0,0,0,0.3)";
        return false;
    };

    dragDropContainer.ondragend = () => {
        return false;
    };

    dragDropContainer.ondrop = (event) => {
        event.preventDefault();

        filePath = event.dataTransfer.files[0].path;
        const fileType = event.dataTransfer.files[0].type;

        const splitPath = filePath.replace(/^.*[\\\/]/, '').split("/");
        dragDropText.innerText = splitPath[splitPath.length - 1];
        dragDropText.style.color = "white";
        
        uploadBtn.disabled = fileTypes.indexOf(fileType) >= 0 ? false : true;

        return false;
    };

    cancelBtn.addEventListener("click", (event) => {
        ipcRenderer.send("close:modal");
    });

    uploadBtn.addEventListener("click", (event) => {
        ipcRenderer.send("upload:modal", { mediaType, filePath });
    });
}