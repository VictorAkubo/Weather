import React from 'react'
import "./Tiktak.css"
import Circle from "../../circletik.png"
import Cross from "../../crosstik.png"
const Tiktak = () => {
    const addSymbol = (content,no)=>{

    }
  return (
    <div className="tiktak">
        <h2>Tik-Tak-Toe</h2>
        <div className="column">
            <p onClick={addSymbol(1)} ><img src={Circle} alt=""/></p>
            <p onClick={addSymbol(2)}></p>
            <p onClick={addSymbol(3)}></p>
        </div>
        <div className="column">
            <p onClick={addSymbol(4)}></p>
            <p onClick={addSymbol(5)}></p>
            <p onClick={addSymbol(6)}></p>
        </div>
        <div className="column">
            <p onClick={addSymbol(7)}></p>
            <p onClick={addSymbol(8)}></p>
            <p onClick={addSymbol(9)}></p>
        </div>
        <button>reset</button>
    </div>
  )
}

export default Tiktak