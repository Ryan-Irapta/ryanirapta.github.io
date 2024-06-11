import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
