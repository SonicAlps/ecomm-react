import { Link } from "react-router-dom"
import CartProvider from "../context/CartContext"
import { useCart } from "../context/CartContext"
import { getProductById, getProducts } from "../data/products";

export default function ProductCard({ product }){

    const{addToCart, cartItems} = useCart();
    const productInCart = cartItems.find((item) => item.id === product.id);
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})`: "";
    
    return (
        <div className="product-card" >
                        <img src={product.image} className="product-card-image" />
                        <div className = "product-card-content">
                            <h3 className="product-card-name">{product.name}</h3>
                            <p>${product.price}</p>
                            <div className="product-card-actions">
                                <Link className="btn btn-secondary" to={`/products/${product.id}`}>
                                View Details
                                </Link>
                                <button className="btn btn-primary" 
                                onClick={() => addToCart(product.id)}>Add to Cart {productQuantityLabel} </button>
                                </div>
                                
                            
                        </div>
                    </div>
    )

}