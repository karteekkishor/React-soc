import React from 'react'
import './Style.css'

function Card(props) {
  return (
    <div>
    <div className='card'>
        <div>
            <img src={props.Image} alt="image" height='300px' width='300px' />
        </div>
        <div align="center">
            <h3>{props.Title}</h3>
        </div>
    </div>
    </div>
  )
}

export default Card