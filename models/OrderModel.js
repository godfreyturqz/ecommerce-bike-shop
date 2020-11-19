const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderItems: [{
        productId: {type: String, required: true},
        name: {type: String, required: true},
        quantity: {type: Number, required: true},
        price: {type: Number, required: true}
    }],
    totalPrice: {type: Number, required: true},
    shippingData: {
        fullName: {type: String, required: true},
        address: {type: String, required: true}
    },
    paymentMethod: {type: String, required: true}
})

const OrderModel = mongoose.model('orders', orderSchema)

module.exports = OrderModel