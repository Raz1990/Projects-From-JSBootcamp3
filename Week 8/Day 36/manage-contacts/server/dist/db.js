"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DB {
    constructor() {
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }
    getUsers() {
        return new Promise((resolve) => {
            resolve(this.contacts);
        });
    }
}
exports.DB = DB;
//# sourceMappingURL=db.js.map