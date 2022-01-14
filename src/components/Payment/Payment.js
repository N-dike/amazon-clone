import React, { useEffect, useState }from 'react'
import axios from "../../utils/axios"
import {db} from "../../firebase.js"
import { collection, doc, setDoc } from "firebase/firestore"; 
import Header from "../layouts/Header"
import CartProducts from '../CartProducts/CartProducts'
import CurrencyFormat from 'react-currency-format'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from "../../context/StateProvider";
import { getCartTotal } from '../../context/reducer'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import './Payment.css'

function Payment() { 
    const stripe = useStripe()
    const element = useElements()
    const navigate = useNavigate()
    
    const [{cart, user}, dispatch] = useStateValue()
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true);
   

    useEffect(() => {
        // generate the special stripe secret which allow us to charge a customer
        const getClientSecret = async () => {
          const response = await axios({
            method: "post",
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getCartTotal(cart) * 100}`,
          });
          setClientSecret(response.data.clientSecret);
        };
    
        getClientSecret();
      }, [cart]);

      console.log('the Secret is >>', clientSecret)
    
    const handleSubmit = async (event) =>{
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardElement)
            }
        }).then (({ paymentIntent }) => {

            const userRef = doc(db, "users", user?.uid, "orders", paymentIntent.id)
            try {
               setDoc( userRef
              , {
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                   }
               )
                console.log("Document written with ID: ", userRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
            
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            
            dispatch({
                type: 'EMPTY_CART'
            })
            navigate('/orders')
        })
    }
    const chHandler = event =>{
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }
    
    return (
        <>
        <Header />
        
        <div className="payment">
          <div className="payment-container">
              <h1>
                  Checkout (<Link to="/cart">{cart?.length} items </Link>)
              </h1>
              <div className="payment-section">
                  <div className="payment-title">
                      <h3>Delivery Address</h3>
                  </div>
                  <div className="payment-address">
                      <p>{user?.email}</p> 
                      <p>123, React Lane</p>
                      <p>Lagos, Nigeria</p>
                  </div>
              </div>

              <div className="payment-section"></div>
              <div className="payment-title">
                  <h3>Review Items and Delivery</h3>
              </div>
              <div className="payment-items">
              {cart.map((item, index) => (
              <CartProducts
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
              </div>

              <div className="payment-section"></div>
              <div className="payment-title">
                  <h3>Payment Method</h3>
              </div>
              <div className="payment-details">
                  <form onSubmit={handleSubmit}>
                      <CardElement onChange={chHandler}/>
                      <div className='payment-priceContainer'>
                      <CurrencyFormat
                        renderText={value => (
                                <p>
                                    Subtotal ({cart.length} items) : <strong>{`${value}`}</strong>
                                </p>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"} />
                        <button disabled={processing || disabled || 
                            succeeded}>
                                <span>{processing ? <p>Processing</p>:
                                "Buy Now"}</span>
                            </button>
                      </div>
                      {error && <div>error</div>}
                      </form>
              </div>
          </div>
        </div>
        </>
    )
}

export default Payment