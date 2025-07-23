import { React, useContext } from 'react'
import Header from './Header'
import { CartContext } from '../Context/CartContext';
import './Cart.css'

const Cart = ({ setIsVisible, isVisible, setAppear }) => {
    const { cart } = useContext(CartContext);
    const cartItems = () => {
        const items = localStorage.getItem("cart")
        try {
            const parseItem = JSON.parse(items);
            return parseItem;
        }
        catch (error) {
            console.error("Failed to fetch items", error)
            return []
        }
    }
    // let sum=0
    const parsedItems = cartItems();
    const subtotal = parsedItems.reduce((sum, item) => sum + item.price, 0);
    return (
        <>
            {isVisible ? <div className="overlay" onClick={() => setAppear(false)}></div> : ""}
            <div className={`cartPage ${isVisible ? "" : "cartPageHide"}`}>
                <button onClick={() => setIsVisible(!isVisible)}>✖</button>
               

                <div className="headCart">
                    <p>Cart <span>({cart.length} items) </span></p>
                </div>
                {parsedItems.map((item) => (
                <div className="pdtDetail" key={item.cartItemId}>
                    <div className="pdtImg"><img srcSet={item.imgSrc} alt=""/></div>
                    <div className="pdtValue">
                        <div className="pdtName">{item.name}</div>
                        <div className="pdtPrice">${item.price}</div>
                        <div className="indecBtn">

                        </div>
                    </div>
                    <div className="priceAndDlt">
                        <div className="dltBtn"><i className="fa-solid fa-trash" onClick={() => {
                        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
                        const updatedItems = storedItems.filter(p => p.cartItemId !== item.cartItemId);
                        localStorage.setItem("cart", JSON.stringify(updatedItems));
                        window.location.reload(); // You can also use state to re-render instead of reload
                    }}></i></div>
                        <div className="pdtPrice">${item.price}</div>
                    </div>
                </div>
                ))}
                <div className="subTotal">
                    <div className="total">
                        <p>Subtotal</p>
                        <p>${subtotal}</p>
                    </div>
                    <div className="totalCaption">
                        <p>Taxes and shipping are calculated at checkout.</p>
                    </div>
                    <div className="buyBtn">
                        <button>Checkout</button>
                        <button>View Cart</button>
                        <div className="secureCheck">
                            <i className="fa-solid fa-lock"></i>
                            <p>Secure Checkout</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart