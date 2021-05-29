import express, { Application} from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import {CommonRoutesConfig} from "./common/routesConfig";
import {UserRoutes} from "./users/userRoutesConfig";

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10);
const routes: any = [];
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded())
routes.push(new UserRoutes(app));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    app.listen(PORT, (): void => {
        routes.forEach((route: CommonRoutesConfig) => {
            console.log(`Routes scanned ${route.getName()}`);
        });
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}