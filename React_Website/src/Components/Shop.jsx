import { useState,useEffect,useContext } from "react"
import { CartContext } from '../Context/CartContext';


const Shop = () => {
    const { cart, setCart } = useContext(CartContext);
    const products = [
        {
            id: 1,
            name: "I'm a product",
            price: 70.00,
            imgSrc: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/20/DLi1QYOo_7c5c1215d88b41d99ea9ac2dbb48e8c9.jpg"
        },
        {
            id: 2,
            name: "I'm a product",
            price: 40.00,
            imgSrc: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/FEBRUARY/19/vGxP08QQ_c4ff27140ec44b1a80654a063456ffa1.jpg"
        },
        {
            id: 3,
            name: "I'm a product",
            price: 30.00,
            imgSrc: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/33471254/2025/4/28/a65c19dd-a204-461a-bce2-5653e17eecb51745849277524-GoSriKi-Women-Regular-Kurta-with-Palazzos--With-Dupatta-9631-1.jpg"
        },
        {
            id: 4,
            name: "I'm a product",
            price: 80.00,
            imgSrc: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29393562/2024/5/7/77f2882c-bf3f-4f82-b6e7-5bc6c63c84651715050936430MinicultCottonShortswithmatchingtshirtwithcutePrintsBeigeRei1.jpg"
        },
        {
            id: 5,
            name: "I'm a product",
            price: 50.00,
            imgSrc: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29842554/2024/7/10/617bbdab-2caf-4992-b637-f926a9a1fe311720613518131-Nap-Chief-Kids-Printed-Pure-Cotton-T-shirt-With-Short-229172-11.jpg"
        },
        {
            id: 6,
            name: "I'm a product",
            price: 37.00,
            imgSrc: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28219632/2024/3/12/4fc84572-cad2-4b42-9a39-006351e9db651710256687610CampusSutraMenClassicOpaqueCheckedCasualShirt1.jpg"
        }
    ];

    const addToCart = (product) => {
        const updatedCart = [...cart, product]
        setCart(updatedCart)

    }
    return (
        <div id="shop">
            <div className="head">
                <p>SHOP</p>
            </div>
            <div className="items">
                {products.map((product) => (
                    <div className="Container" key={product.id}>
                        <div className="img">
                            <img src={product.imgSrc} width="250" />
                        </div>
                        <div className="pdtDetails" id={`pdt-${product.id}`}>
                            <p className="pname">{product.name}</p>
                            <p className="price">"$"{product.price}</p>
                            <button onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Shop