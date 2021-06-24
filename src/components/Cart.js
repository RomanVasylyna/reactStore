import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartSingleItem from './CartSingleItem';
import Location from './Location';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { clearCart } from '../components/store/actions';


// { cart, totalAmount, clearCart, increaseCount, decreaseCount }

const Cart = (props) => {

    return (
        <Container>
            <h1>Cart</h1>

            <Row>

                {/* key={cartItem.id} cartItem={cartItem} cart={cart} increaseCount={increaseCount} decreaseCount={decreaseCount} */}

                <Col xs={12} md={12} xl={5}>
                    {props.cart.length ?
                        props.cart.map(cartItem => <CartSingleItem key={cartItem.id} cartItem={cartItem} />)
                        : <p style={{ fontSize: '1.3rem' }}>Your Cart is empty...</p>
                    }
                </Col>

              

                {props.cart.length ?
                    <Col xs={12} md={4} xl={7} style={{ textAlign: 'center' }}>
                        <Location />
                        <h3 style={{ marginTop: '50px' }}>Total : {props.totalAmount} $</h3>
                        <Button variant="danger" onClick={() => props.dispatch(clearCart())}>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></Button>
                    </Col>
                    : ''
                }


            </Row>



        </Container>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart,
        totalAmount: state.totalAmount
    }
}

export default connect(mapStateToProps)(Cart);
