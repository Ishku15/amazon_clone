import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a href="/" className="brand">Amazon</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
            <div className="row center">
              {
                data.products.map(product =>
                  <div key={product.id} className="card">
                  <a href={`/product/${product.id}`}>
                      
                      <img src={product.image} alt={product.name} className="medium" />
                  </a>
                  <div className="card-body">
                      <a href={`/product/${product.id}`}>
                          <h2>{product.name}</h2>
                      </a>
                  <div className="rating">
                      <span>
                          <i className="fa fa-star"></i>
                      </span>
                      <span>
                          <i className="fa fa-star"></i>
                      </span>
                      <span>
                          <i className="fa fa-star"></i>
                      </span>
                      <span>
                          <i className="fa fa-star"></i>
                      </span>
                      <span>
                          <i className="fa fa-star"></i>
                      </span>
                  </div>
                  <div className="price">
                      ${product.price}
                  </div>
                  </div>   
              </div>)
              }
               
            </div>
        </main>
        <footer className="row center">All Rights Reserved</footer>
    </div>
  );
}

export default App;
