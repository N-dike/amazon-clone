import React, { useEffect } from 'react'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Footer from './components/layouts/Footer/Footer'
import Payment from './components/Payment/Payment'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './components/Login/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useStateValue } from './context/StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './components/Orders/Orders'

const promise = loadStripe('pk_test_51K9NhuIr08UX884YH74AjXnraAjRqk8mIfNyxnO9OdVweXsMOfRpOCCgZVvxNL18eXExy28uzN2JtDfw3vjexquW00nBMHKIp1')

function App() {
const [{}, dispatch] = useStateValue()
  useEffect(()=>{
    const auth = getAuth()
    onAuthStateChanged(auth, (authUser => {
      console.log('The user is...', authUser);
     
        dispatch({
          type: "SET_USER",
          user: authUser ? authUser : null
        
      })
    }))
  }, [])
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/payment" element={
       <Elements stripe={promise}>
       <Payment />
       </Elements>
      }/>
      <Route path="/orders" element={<Orders />}/>
       </Routes>
       {/* <Footer/> */}
    </div>
    </Router>
      );
}

export default App;
