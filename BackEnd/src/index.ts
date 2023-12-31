import { AppDataSource } from "./data-source"
import * as express from 'express';
import router from "./routes";
import * as cors from 'cors'

AppDataSource.initialize().then(async () => {
    const app = express();
    const port = 5000;

    app.use(cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
        // origin: ["http://localhost:5173/"],
        // allowedHeaders
      }))

    app.use(express.json());
    app.use("/api", router)

    app.listen(port, () => {
        console.log(`server running on http://localhost:${port}`);
    })

}).catch(error => console.log(error))
