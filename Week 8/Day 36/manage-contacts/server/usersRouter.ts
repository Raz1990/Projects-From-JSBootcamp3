
const userRouter = express.Router();
import {DB} from "./db";

const db = new DB();

// GET /users
userRouter.get('/', async (req, res) => {
    const users = await db.getUsers();
    res.json(users);
});

module.exports = userRouter;