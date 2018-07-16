const worker = new Worker("worker.js");

function click() {
    console.log("stam");
}

worker.onmessage= (e)=>{
    if(e.data){
        document.getElementById("loading").innerText = "Loading " + e.data +"%";
    }
};

worker.postMessage(0);



