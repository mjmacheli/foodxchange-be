import {Application} from "express";

interface configureRoutes {
}

class CommonRoutesConfig {
    app: Application;
    name: string;


    constructor(app: Application, name: string) {
        this.app = app;
        this.name = name;
    }

    getName() : string {
        return this.name;
    }
}

export { configureRoutes, CommonRoutesConfig}