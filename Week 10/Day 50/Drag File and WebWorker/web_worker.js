// importScripts('FileDragger.js');
onmessage = (e) => {
    if (e.data) {
        for(let file of e.data){
            console.log(file.name+' -- '+file.size);
            const fr = new FileReader();
            fr.readAsDataURL(file);

            fr.onload= (data)=>{
                //console.log(fr.result);
                postMessage({res: fr.result});
            };

            fr.onprogress = (e)=>{
                console.log('Loading: '+ e.loaded/e.total*100+'%');
            };

        }
    }
    postMessage({});
};

