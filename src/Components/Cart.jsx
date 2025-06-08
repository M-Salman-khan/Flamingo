import { React,useContext } from 'react'
import Header from './Header'
import { CartContext } from '../Context/CartContext';
import './Cart.css'

const Cart = ({ setIsVisible, isVisible, setAppear }) => {
    const { cart } = useContext(CartContext);
    return (
        <>
            {isVisible ? <div className="overlay" onClick={() => setAppear(false)}></div> : ""}
            <div className={`cartPage ${isVisible ? "" : "cartPageHide"}`}>
                <button onClick={() => setIsVisible(!isVisible)}>✖</button>
                <div className="headCart">
                    <p>Cart <span>({cart.length} items) </span></p>
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
                        <div className="dltBtn"><i class="fa-solid fa-trash"></i></div>
                        <div className="pdtPrice">$85.00</div>
                    </div>
                </div>
                <div className="buyBtn">
                    <button>Checkout</button>
                <button>Buy now</button>
                <div className="secureCheck">
                    <i class="fa-solid fa-lock"></i>
                    Secure Checkout
                </div>
                </div>
            </div>

        </>
    )
}

export default Cart