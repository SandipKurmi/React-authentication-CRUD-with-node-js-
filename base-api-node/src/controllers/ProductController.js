
// eslint-disable-next-line import/no-extraneous-dependencies
import Controller from './Controller';
import Product from '../models/ProductModel';
import ProductService from '../services/ProductService';
//import Stripe from '../helpers/Stripe';

const productService = new ProductService(new Product().getInstance());

class ProductController extends Controller {
    constructor(service) {
        super(service);


        this.searchProduct = this.searchProduct.bind(this);


    }

    async searchProduct(req, res) {
        var key = req.params.key
        // console.log(key)
        const response = await this.service.searchProduct(key);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }


}

export default new ProductController(productService);
