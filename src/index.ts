import Express, { Request, Response } from "express";
import "dotenv/config";

const app = Express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.json({ ok: true })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
