import React from 'react'
import { toast } from 'react-toastify'
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from 'react-icons/io';
import { useStateValue } from '../../context/StateProvider'
import'./Product.css'

function Product ({ title, price, rating, image}) {
 const [{cart}, dispatch] = useStateValue()
 let halfRating =(rating - Math.floor(rating)) * 10
 let outline = 0;
 halfRating > 0 ? outline = (5 - Math.ceil(rating)) : outline = (5 - Math.floor(rating))

     const addToCart = () => {
         dispatch({
             type: 'ADD_TO_CART',
             payload: { title, price, rating, image }
         })
         toast.info(`${title} added `)
     }

    return (
        <div className='product'>
            <img src={image} alt={title}/>
            <div className='product-info'>
                <p>{title}</p>
                <div className='product-group'>
                    <p className='product-price'>
                        <sup>$</sup>
                        <strong>{price}</strong>
                    </p>
                    <div className="product-rating">
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
                        {
                            outline > 0 ? (
                                Array(outline)
                                    .fill()
                                    .map((_, index) => (
                                        <IoMdStarOutline key={index} />
                                    ))
                            )
                                : ""
                        }
                    </div>
                </div>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
