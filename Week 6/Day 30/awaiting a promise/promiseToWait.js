getUser = () => {
    return new Promise((resolve)=>{
    setTimeout( () => resolve ({id:345,username:'hatula'}),500);
        }
    )
};

auth = () => {
    return new Promise ((resolve, reject, notify) => {
        let user = getUser()
            .then(() => {
                if (user) {
                    resolve (user);
                }
            });
    });
};

function app() {
    let res = auth()
        .then( (res) => {
        console.log(res);
    });
}

app();