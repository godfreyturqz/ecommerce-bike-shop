import { useState, useEffect } from 'react'
//redux
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../redux/product/productActions';
import { addToCart } from '../../redux/cart/cartActions'

function ProductDetailsLogic(props) {
    const [quantity, setQuantity] = useState(1)
    const getProductDetailsReducer = useSelector(state => state.getProductDetailsReducer)

    const productId = props.match.params.id
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatches an action to change the state of getProductDetailsReducer
        dispatch(getProductDetails(productId))

    }, [dispatch, productId])


    const decreaseQuantity = () => {
        if (quantity === 1) return
        setQuantity(prev => prev - 1)
    }
    const increaseQuantity = () => {
        if (quantity >= getProductDetailsReducer.data.stockCount) return
        setQuantity(prev => prev + 1)
    }
    const handleAddtoCart = () => {
        dispatch(addToCart(productId, quantity))
        props.history.push('/cart')
    }
    

    return {
        getProductDetailsReducer,
        quantity,
        decreaseQuantity, 
        increaseQuantity, 
        handleAddtoCart
    }
}

export default ProductDetailsLogic