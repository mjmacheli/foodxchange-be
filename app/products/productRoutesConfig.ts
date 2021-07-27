import { CommonRoutesConfig, configureRoutes } from "../common/routesConfig";
import { Application } from "express";
import { ProductController } from "./controllers/ProductController";

class ProductRoutes extends CommonRoutesConfig implements configureRoutes {

    constructor(app: Application) {
        super(app, 'ProductRoutes');
        this.configureRoutes();
    }

    configureRoutes() {

        const productController = new ProductController();

        this.app.get(`/products`, [productController.getProducts]);

        this.app.post(`/products`, [
            productController.createProduct]);

        this.app.put(`/products/:productId`, [
            productController.put]);

        this.app.patch(`/products/:productId`, [
            productController.patch]);

        this.app.delete(`/products/productId`, [productController.removeProduct]);

        this.app.get(`/products/productId`, [
            productController.getUserById]);
    }

}

export { ProductRoutes }