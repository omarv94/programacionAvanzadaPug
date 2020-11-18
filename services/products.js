const productsMocks = require('../utils/mocks/products')
const MongoLib = require('../lib/mongo')

/**
* product
* import the shema
*/
const products = require('../models/product')
const product = require('../models/product')

class ProductsService {
    constructor() {
        this.collection = 'products'
        this.mongoDB = new MongoLib()
    }

    /**
     * Bussines logical
     */
    async getProducts({ tags }) {
        const query = tags && { tags: { $in: tags } }
        const products = await this.mongoDB.getAll(this.collection, query)
        //return Promise.resolve( products )
        //return Promise.resolve( productsMocks )
        return products || []
    }

    getProduct( { productId } ) {
        return Promise.resolve( productsMocks[productId] )
    }

    createProduct( { product } ) {
        return Promise.resolve( productsMocks[product] )
    }

    updateProduct( { productId, product } ) {
        return Promise.resolve( productsMocks[0] )
    }

    deleteProduct( { productId } ) {
        return Promise.resolve( productsMocks[productId] )
    }
}

module.exports = ProductsService