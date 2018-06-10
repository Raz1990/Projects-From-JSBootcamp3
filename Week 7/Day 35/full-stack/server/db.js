const fs = require('fs');

class DB {

    constructor() {
        this.data = this.readFromJson();
    }

    readFromJson() {
        const data = fs.readFileSync(__dirname + '/data.json');
        return JSON.parse(data);
    }

    writeToJson() {
        fs.writeFileSync(__dirname + '/data.json', JSON.stringify(this.data));
    }

    getUsers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data.users);
            }, 500);
        });
    }

    createUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                user.id = this.data.users[this.data.users.length - 1].id + 1;
                this.data.users.push(user);
                this.writeToJson();
                resolve(user);
            }, 500);
        });
    }

    deleteUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.data.users.splice(user.id-1,1);
                this.writeToJson();
                resolve(user);
            }, 500);
        });
    }

    updateUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const id = user.id;
                const name = user.username;
                const age = user.age;
                let foundUser = this.data.users.find( u => u.id === id );
                foundUser.username = "Raz";
                foundUser.age = 27;
                this.writeToJson();
                resolve(user);
            }, 500);
        });
    }


}

module.exports = DB;