import {React,useState} from 'react'
import Header from './Header'
import './Cart.css'

const Cart = (props) => {
    return (
        <>
            <div className={`cartPage ${props.navSpawn?"cartPageHide":""}`}>
                <div className="headCart ">
                    <p>Cart</p>
                </div>
            <div className="pdtDetail">
                <div className="pdtImg"><img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/20/DLi1QYOo_7c5c1215d88b41d99ea9ac2dbb48e8c9.jpg" alt="" srcset="" /></div>
                <div className="pdtValue">
                    <div className="pdtName">I'm a Product</div>
                    <div className="pdtPrice">$85.00</div>
                    <div className="indecBtn">

                    </div>
                </div>
                <div className="priceAndDlt">
                    <div className="dltBtn"></div>
                    <div className="pdtPrice">$85.00</div>
                </div>
            </div>
            </div>
            {/* <button onClick={()=>setAppear(!appear)}>Hide</button> */}

        </>
    )
}

export default Cart