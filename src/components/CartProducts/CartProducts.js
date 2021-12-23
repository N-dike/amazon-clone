import React from 'react'
import './CartProducts.css'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import { useStateValue } from '../../context/StateProvider'

const CartProducts = ({ id, title, price, rating, image, hideButton }) => {
    const [{cart}, dispatch] = useStateValue()
    let halfRating = (rating - Math.floor(rating)) * 10

    const removeFromCart = () => {

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        })
    }
    return (
        <div className="checkout-product">
            <img src={image} alt="" className="checkout-image" />
            <div className="checkout-info">
                <p className="checkout-title">{title}</p>
                <p className="checkout-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-rating">
                {
                        Array(Math.floor(rating))
                            .fill()
                            .map((_, index) => (
                                <IoMdStar key={index} />
                            ))
                    }
                    {
                        (halfRating > 0) ? <IoMdStarHalf /> : <></>
                    }
                </div>
                {!hideButton && (<button onClick={removeFromCart}>Remove From Cart</button>)}
            </div>
        </div>
    )
}


export default CartProducts