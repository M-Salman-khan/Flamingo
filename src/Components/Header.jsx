import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import Cart from './Cart';
const Header = () => {
    const { cart } = useCart();
    const [hideOrAppear, setHideOrAppear] = useState(false)
    const [navSpawn, setNavSpawn] = useState(true)
    const [appear, setAppear] = useState(false)

    return (<>
        <header>

            <nav>

                <div className="search">
                    <i className="fa-brands fa-searchengin"></i>
                    <input type="text" id="searchArea" placeholder="Search..." />
                </div>
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><a href="#shop">Shop</a> </li>
                    <li><a href="#about"> About</a></li>
                    <li><a href="#contactMe"> Contact</a></li>
                </ul>
                <div className="logoName">Flamingo</div>
                <div className="side"><Link to="/login" className='amphor'>
                    <div className="acc">
                        <img srcSet="./assests/account_circle_24dp_7F703D_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                        <p>Log In</p>
                    </div></Link>
                    <div className="cart cursor-pointer" onClick={()=>setAppear(!appear)}>
                        <img srcSet="./assests/shopping_cart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                        <p className="cartCount">{cart.length}</p>
                    </div>
                </div>

                <div className={`sideBar ${hideOrAppear ? "" : "hideSideBar"}`}>
                    <button className='hideOrAppearBtn' onClick={() => {
                        setHideOrAppear(!hideOrAppear);
                        setNavSpawn(!navSpawn)
                    }
                }>{navSpawn ? '\u2630' : '\u2716'}</button>
                    <ul>
                        <li><Link to="/"> Home</Link></li>
                        <li><a href="#shop">Shop</a> </li>
                        <li><a href="#about"> About</a></li>
                        <li><a href="#contactMe"> Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
   
      
      <Cart isVisible={appear} setIsVisible={setAppear} setAppear={setAppear} />
   
    
    </>
    )
}

export default Header