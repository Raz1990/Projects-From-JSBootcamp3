"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter = express.Router();
const db_1 = require("./db");
const db = new db_1.DB();
// GET /users
userRouter.get('/', async (req, res) => {
    const users = await db.getUsers();
    res.json(users);
});
module.exports = userRouter;
//# sourceMappingURL=usersRouter.js.map