import React from 'react';
import "./ProductItem.css";
import { connect } from 'react-redux';
import { addToCart } from "../../Redux/Shopping/ShoppingActions"

const ProductItem = ({ current, addToCart}) => {
  return (
    <div className="singleItem">
      <img className='singleItem__image' src={current.img} alt={current.title} />
      <div className="singleItem__details">
        <p className="details__title">{current.title}</p>
        <p className="details__description">{current.description}</p>
        <p className="details__price">$ {current.price}</p>

        <button onClick={() => {
          addToCart(current.id)
        }} className="details__addBtn">Add To Cart</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);




// function ProductItem() {
//     const { id } = useParams();
    
//     const items = items[id];

//     if(!items)
//     return <h2>Product Not Found!</h2>
//   return (
//     <div>
//       <div className="prd-item">
//             <h2>{items.name}</h2>
//             <img src={items.img} height={250} alt="shoe img" />
//             <h2>Price: {items.price}</h2>
//           </div>
//     </div>
//   );
// }

// export default ProductItem;