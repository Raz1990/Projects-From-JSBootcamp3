onmessage = () => {
    const max = 500000;
    for (let i = 0; i <= max; i++){
        postMessage ( (i / max ).toFixed(2) * 100);
    }
};