import React from 'react'
import Item from './Item/Item';
import { connect } from "react-redux";
import './Item.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Items = ({ products }) => {
  // console.log(products)
  return (
    <div className="main">
     {[products.map((product) => (
        <Item key={product.id} product={product} />
      ))]}
    </div>
  )
}

const mapStateToProps = (state) => {
return {
  products: state.shop.products,
}
}

export default connect(mapStateToProps)(Items);