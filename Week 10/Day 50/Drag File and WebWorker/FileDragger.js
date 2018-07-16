function onDrop(e) {
    e.preventDefault();

    const worker = new Worker('web_worker.js');

    worker.onmessage = (e)=>{
        if (e.data.res){
            document.getElementsByClassName('image')[0].src = e.data.res;
        }
    };
    worker.postMessage(e.dataTransfer.files);
}

function onDragOver(e) {
    e.preventDefault();
}