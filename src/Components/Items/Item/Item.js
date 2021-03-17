import React from 'react'
import { Link } from "react-router-dom";
import "./item.css";
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem, addToFavourite } from "../../../Redux/Shopping/ShoppingActions";

const Items = ({ product, addToCart, loadCurrentItem, addToFavourite }) => {
  return (
    <div>
      <div className="product">
      <img className="product__image" src={product.img} alt={product.title} />

      <div className="product__details" >
        <p className="details__title">{product.title}</p>
        <p className="details__desc">{product.description}</p>
        <p className="details__price">$ {product.price}</p>
      </div>

      <div className="product__buttons">
        <Link to={`/item/${product.id}`}>
          <button onClick={() => {
            loadCurrentItem(product)
          }} className="buttons__btn , buttons__view" >
            View Item
          </button>
        </Link>
        <button onClick={() => addToFavourite(product.id)}  className="buttons__btn , buttons__add">AddToFavoutite</button>
        <button onClick={() => addToCart(product.id)} className="buttons__btn , buttons__add" >
          Add To Cart
        </button>
      </div>
    </div>
    </div>
  
  )
}


const mapDispatchToProps = (dispatch) => {
return {
  addToCart: (id) => dispatch(addToCart(id)),
  loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  addToFavourite: (id) => dispatch(addToFavourite(id))
}
}

export default connect(null, mapDispatchToProps)(Items);