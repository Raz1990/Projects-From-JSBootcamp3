class DB {
    contacts;

    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }

    getUsers() {
        return new Promise((resolve) => {
            resolve(this.contacts);
        });
    }
}

export {DB};