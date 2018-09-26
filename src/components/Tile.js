import React from 'react';

const Tile = ({product}) => {
  return (
    <div className="card w-25 m-3">
      <img className="card-img-top" src={product.image} alt="Image" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
};

export default Tile;