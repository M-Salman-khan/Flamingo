import { useEffect, useState } from 'react';
import Header from './Header';
import { useCart } from "../Context/CartContext";
import './Cart.css';

const Cart = ({ setIsVisible, isVisible, setAppear }) => {
  const { countCart,cart,setCart } = useCart();
  const [parsedItems, setParsedItems] = useState([]);
  
  // Fetch cart items once
  useEffect(() => {
    try {
      const items = JSON.parse(localStorage.getItem('cart')) || [];
      setParsedItems(items);
    } catch (error) {
      console.error('Failed to fetch items', error);
    }
  }, [isVisible]); // Re-run when cart becomes visible

  const subtotal = parsedItems.reduce((sum, item) => sum + Number(item.price), 0);

  const deleteItem = (id) => {
          const updatedItems = parsedItems.filter((item) => item.cartItemId !== id);
          setParsedItems(updatedItems);
          setCart(updatedItems);
          localStorage.setItem('cart', JSON.stringify(updatedItems));
      };
  

  return (
    <>
      {isVisible && <div className="overlay" onClick={() => setAppear(false)}></div>}

      <div className={`cartPage ${isVisible ? '' : 'cartPageHide'}`}>
        <button onClick={() => setIsVisible(!isVisible)}>✖</button>

        <div className="headCart">
          <p>
            Cart <span>({countCart} items)</span>
          </p>
        </div>

        {parsedItems.length === 0 ? (
          <p className="emptyCart">Your cart is empty.</p>
        ) : (
          parsedItems.map((item) => (
            <div className="pdtDetail" key={item.cartItemId}>
              <div className="pdtImg">
                <img srcSet={item.imgSrc} alt={item.name} />
              </div>
              <div className="pdtValue">
                <div className="pdtName">{item.name}</div>
                <div className="pdtPrice">${item.price}</div>
              </div>
              <div className="priceAndDlt">
                <div className="dltBtn">
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteItem(item.cartItemId)}
                  ></i>
                </div>
                <div className="pdtPrice">${item.price}</div>
              </div>
            </div>
          ))
        )}

        <div className="subTotal">
          <div className="total">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
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
  );
};

export default Cart;
