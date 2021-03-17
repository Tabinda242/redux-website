import React from "react";
import  "./FavouriteItem.css";
import FavouriteItem from "./FavouriteItem";
import { connect } from 'react-redux';


const Favourite = ({ favourite }) => {
  
  return (
    <div className="cart">
      <div >
        {favourite.map((item) => (
          <FavouriteItem key={item.id} item={item} />
        ))}
      </div>
      {/* <div className={styles.cart__summary}>
      
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice} </span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button> */}
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favourite: state.shop.favourite,
  };
};

export default connect(mapStateToProps)(Favourite);