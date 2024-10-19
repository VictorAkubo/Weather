import React, { useEffect, useState } from 'react'
import "./RelatedProducts.css"
import Item from "../items/Item"
const RelatedProducts = () => {
    const [data_product, setDataProduct] = useState([])
    const fetchInfo = async () => {
        await fetch("http://localhost:4000/relatedproducts").then(res => res.json()).then(data => setDataProduct(data))
    }
    useEffect(() => {
        fetchInfo()
    },[])
    return (
        <div className='relatedproducts'>
            <h1>Related Product</h1>
            <hr />
            <div className="relatedproduct-items">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts