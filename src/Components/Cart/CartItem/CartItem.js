import React, { useState } from "react";
import './CartItem.css';
import { connect } from 'react-redux';
import { removeFromCart, adjustQty} from "../../../Redux/Shopping/ShoppingActions";

const CartItem = ({ item, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(item.qty);
  
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  // console.log(item)
  
  return (
    <div className="container">
      <img src={item.img}
           alt={item.title} 
           className="cartItem_img" 
          />
      <div className="container2">
        <p className="cartItem_title">{item.title}</p>
        <p className="cartItem_desc">{item.description}</p>
        <p className="cartItem_price">$ {item.price}</p>
      </div>
      <div>
        <div className="container3">
          <label htmlFor="qty" className="cartItem_qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} className="cartItem_qty_input"/>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="cartItem_delete">Delete</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);