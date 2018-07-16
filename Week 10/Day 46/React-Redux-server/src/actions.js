const baseUrl = "http://localhost:4000";

export function add(name) {
    console.log("IN ADD ", name);
    return {type: "ADD", name: name};
}

export function loadAllContacts(){
    return async dispatch => {
        const contacts = await get("/");

        // await delay(2500);
        //
        // const counters = [
        //     {id:1, name: "Banana", value: 0},
        //     {id:2, name: "Sport", value: 1},
        // ];

        dispatch(setContacts(contacts));
    };
}

function get(url) {
    return fetch(baseUrl + url)
        .then(res => res.json());
}

function post(url, body) {
    return fetch(baseUrl + url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
}

function setContacts(contacts) {
    return {
        type: "SET_CONTACTS",
        contacts,
    }
}
