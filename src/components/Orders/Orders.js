import Header from "../layouts/Header"
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import './Orders.css'
import { collection, getDocs, orderBy, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import Order from "../Order/Order";

function Orders() {
    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        if (user){
            const userRef = collection(db, 'users', user?.uid, 'orders')
            onSnapshot(userRef, orderBy('name', 'description'), (snapshot) =>{
                setOrders(snapshot.docs.map(doc =>
                    ({id: doc.id,
                    data: doc.data()})))
            })
        } 
        else{
            setOrders([])
        }
    }, [user])

    return (
        <>
        <Header/>
        <div className="orders">
            <h1>Your Orders</h1>
        {orders?.map((order, index) => (
                    <Order order={order} key={index} />
                ))}
        </div>
        </>
    )
}


export default Orders
