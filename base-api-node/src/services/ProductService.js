import Service from './Service';

class ProductService extends Service {
    // eslint-disable-next-line no-useless-constructor
    constructor(model) {
        super(model);
        this.searchProduct = this.searchProduct.bind(this);
    }

    async searchProduct(key) {
        console.log(key);
        try {
            let data = await this.model.find({
                "$or": [
                    { name: { $regex: key } },
                    { price: { $regex: key } },
                    { category: { $regex: key } },
                    { company: { $regex: key } },
                ]
            })
            // console.log(data)
            return {
                error: false,
                statusCode: 200,
                data: data
            }

        } catch (error) {
            return {
                error: true,
                status: 500,
                message: "Error in get NewProduct"
            }

        }
    }

}

export default ProductService;
