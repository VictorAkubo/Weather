import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star from "../Assets/star_icon.png"
import starDull from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="ProductDisplay-left">

                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="ProductDisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={starDull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-prices-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad nemo dolore, laborum deleniti animi quisquam dignissimos magni non officiis autem quae distinctio provident. Eaque vitae obcaecati ipsa dolores quod.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <p> Note: Cart displays the total of your current item</p>
                <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                    <span>Category :</span> Women,T-Shirt, Crop-Top
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags :</span> Modern,Latest
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay