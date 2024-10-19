import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from "../Assets/cart_cross_icon.png"
const CartItems = () => {
    const { all_product, addToCart,getTotalCartAmount, removeFromCart, cartItem } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitem-format-main">
                            <img className='carticon-producticon ' src={e.image} alt='' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price* cartItem[e.id]}</p>
                            <img className='cartitems-removeicon' src={removeIcon} onClick={() => removeFromCart(e.id)} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shippping Fee</p>
                            <p>Free</p>
                        </div>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promocode enter it here</p>
                    <div className="classitem-promobox">
                        <input placeholder='promocode'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems