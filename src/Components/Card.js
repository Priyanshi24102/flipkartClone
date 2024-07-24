import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({item}) {
    const navigate=useNavigate();

  const handleClick=()=>{
    navigate("/Product", { state: {  item: item } });
  }
  return (
    <div className='card-box' onClick={handleClick}>
        <div className="card-imagewrapper">
            <img src={item.image} alt="" />
        </div>
        <div className="card-textwrapper">
            <span>{`${item.title.slice(0,20)}...`}</span>
            <span className='bold'>Grab Now</span>
        </div>
    </div>
  )
}

export default Card
