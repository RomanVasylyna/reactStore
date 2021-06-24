import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../components/store/actions';

const CartSingleItem = (props) => {

    // Some Styling
    const amountSpan = {
        padding: '10px 20px',
        margin: '10px',
        border: '1px solid gray',
        borderRadius: '5px',
        fontWeight: '500'
    };

    const amountBtn = {
        padding: '10px',
        border: 'none',
        backgroundColor: '#fff',
        fontSize: '1.5rem',

    };

    const blockedBtn = {
        padding: '10px',
        border: 'none',
        backgroundColor: '#fff',
        fontSize: '1.5rem',
        color: 'gray',
        cursor: 'initial'

    };

    const cartText = {
        fontSize: '1.2rem'
    };

    const cartPrice = {
        fontSize: '1.2rem',
        fontWeight: '500'
    };



    return (
        <>
            <Row style={{ margin: '20px 0px' }}>

                <Col sm={3} md={6}>
                    <Image src={props.cartItem.product.imgSrc} fluid></Image>
                </Col>

                <Col sm={3} md={6} style={{ textAlign: 'center' }}>
                    <p style={cartText}>{props.cartItem.product.name}</p>
                    <hr></hr>
                    <button style={props.cartItem.count === 1 ? blockedBtn : amountBtn} onClick={props.cartItem.count === 1 ? () => alert('You can\'t choose less than 1 item') : () => props.dispatch(decreaseCount(props.cartItem.id))}>-</button>
                    <span style={amountSpan}>{props.cartItem.count}</span>
                    <button style={amountBtn} onClick={() => props.dispatch(increaseCount(props.cartItem.id))}>+</button>
                    <p style={cartPrice}>Price/Per Item : {props.cartItem.cartPrice.toFixed(2)}$</p>
                </Col>

            </Row>

        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
        products: state.products,
        cartItem: ownProps.cartItem
    }
};

export default connect(mapStateToProps)(CartSingleItem);
