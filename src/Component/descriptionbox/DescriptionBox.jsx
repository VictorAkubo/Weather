import React from 'react'
import "./DescriptionBox.css"
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews {122}
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium modi, placeat quas delectus sunt rem tempore debitis fugiat! Enim quia modi a inventore adipisci labore dolor at voluptatibus ad!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium modi, placeat quas delectus sunt rem tempore debitis fugiat! Enim quia modi a inventore adipisci labore dolor at voluptatibus ad!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ab sunt labore distinctio architecto rerum nesciunt perferendis iusto eius odio, necessitatibus natus esse! Aperiam dolores a in. Autem, earum ratione.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ab sunt labore distinctio architecto rerum nesciunt perferendis iusto eius odio, necessitatibus natus esse! Aperiam dolores a in. Autem, earum ratione.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox