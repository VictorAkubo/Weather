import React, { useState, useEffect } from 'react'
import "./NewCollections.css"
import new_collection from "../Assets/new_collections"
import Item from '../items/Item'
const NewCollections = () => {
    const [new_collection, setNew_collection] = useState([])

    const fetchInfo = async () => {
        fetch("http://localhost:4000/newcollections").then(res => res.json()).then(data => setNew_collection(data))
    }
    useEffect(() => {
        fetchInfo()
    }, [])
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}


export default NewCollections