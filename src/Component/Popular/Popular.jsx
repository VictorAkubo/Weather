import React, { useState, useEffect } from 'react'
import "./Popular.css"
import data_product from '../Assets/data'
import Item from '../items/Item'
const Popular =  () => {

  const [DataProduct, setDataProduct] = useState([])

  const fetchInfo = async () => {
    fetch("http://localhost:4000/popularinwomen").then(res => res.json()).then(data => setDataProduct(data))
  }
  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {DataProduct.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
        })}
      </div>
    </div>
  )
}

export default Popular