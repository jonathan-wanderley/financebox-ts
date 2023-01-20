import "express-async-errors";
import Express from "express";
import "dotenv/config";
import cors from "cors";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = Express();
const port = process.env.PORT;

app.use(cors());
app.use(Express.json());
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
