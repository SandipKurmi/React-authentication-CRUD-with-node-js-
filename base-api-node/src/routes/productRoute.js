import ProductController from '../controllers/ProductController';
import auth from '../middleware/auth.middleware';

export default (router) => {
    router.post(`/api/product`, auth, ProductController.insert);
    router.get(`/api/products`, auth, ProductController.getAll);
    router.get(`/api/product/:id`, auth, ProductController.get);
    router.put(`/api/product/:id`, auth, ProductController.update);
    router.delete(`/api/product/:id`, auth, ProductController.delete);
    router.get('/api/search/:key', auth, ProductController.searchProduct)
};
