import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class ProductModel {
    // eslint-disable-next-line class-methods-use-this
    initSchema() {
        const schema = new Schema(
            {
                name: {
                    type: String,
                    default: null,
                },
                price: {
                    type: String,
                    default: null,
                    required: true,
                },
                category: {
                    type: String,
                    default: null,
                },
                userId: {
                    type: String,
                    default: null,

                },
                company: {
                    type: String,
                    default: null,
                }
            },
            {
                timestamps: true,
            },
        );
        schema.plugin(uniqueValidator);
        mongoose.model('products', schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('products');
    }

    // eslint-disable-next-line class-methods-use-this
    getModel() {
        return mongoose.model('products');
    }
}

export default ProductModel;
