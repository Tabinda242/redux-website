import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import './CheckOut.css';

const CheckOut = ({cart}) => {
    const [checkout, setCheckout] = useState({
        userName: '',
        email: '',
        address: '',
        city: '',
    })
    const onChangeHandler = (e) => {
        setCheckout(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const SubmitHandler = () => {
        alert('Your Order Has Been Placed');
    }


    return (
        <div>
            <Form className="checkout_container" onSubmit={SubmitHandler}>
                <h2>CheckOut</h2>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="userName" value={checkout.name} onChange={onChangeHandler} placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={checkout.email} onChange={onChangeHandler} placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" value={checkout.address} onChange={onChangeHandler} placeholder="Enter your Delivery Address" />
                </Form.Group>
                <Form.Group controlId="formGridState">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="city" value={checkout.city} onChange={onChangeHandler} placeholder="Enter your City" />
                </Form.Group>

                <Button variant="primary" type="submit" className="checkout_submit">
                    Place Order
                </Button>
            </Form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

export default connect(mapStateToProps)(CheckOut);