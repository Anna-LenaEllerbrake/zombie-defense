import Router from 'express'
import {productModel} from "../models";

const productRouter = Router()

productRouter.get('/', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    productModel.find().then(products => response.json(products))
})

export default productRouter
