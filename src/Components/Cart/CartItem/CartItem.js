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
      {/* <img src={item.image}
           alt={item.title}  
          /> */}
      <div>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
      </div>
      <div>
        <div>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} />
        </div>
        <button onClick={() => removeFromCart(item.id)}>Delete</button>
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