import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { connect } from "react-redux";

const Home = ({ cart }) => {

  const [cartCount, setcartCount] = useState(0);

  useEffect(() => {
    if(cart){let count = 0;
    cart && cart.forEach((item) => {
      count += item.qty;
    });
    setcartCount(count);}
  }, [cart, cartCount])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span>Navbar</span>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="home">Home</Link>
              </li>
              <li className="nav-item" >
                <Link to="/favouriteitem" className="Nav-link2">Favourite</Link>
              </li>
              <li className="nav-item" >
                <Link to="/postitem" className="Nav-link2">+PostItem</Link>
              </li>
              <li className="nav-item" >
                <Link to="/cart" className="Nav-link2">Cart</Link>
              </li>
              <div>{cartCount}</div>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
return {
  cart: JSON.parse(localStorage.getItem('cartprdt')) || state.shop.cart,
};
};

export default connect(mapStateToProps)(Home);

