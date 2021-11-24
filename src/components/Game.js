import React from "react";
import { Link } from "react-router-dom";

function Game({ name, img, rate, release, id, deleteCard }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <h5>{release}</h5>
      <img className='bg-img' src={img} alt='' />
      <p>{rate}</p>
      <div>
        <Link to={`games/${id}`}>
          <button className='btn'>Show Details</button>
        </Link>
        <button className='btn' onClick={() => deleteCard(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Game;
