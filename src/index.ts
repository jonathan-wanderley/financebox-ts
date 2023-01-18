import Express from "express";
import "dotenv/config";
import routes from "./routes";

const app = Express();
const port = process.env.PORT;

app.use(routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
