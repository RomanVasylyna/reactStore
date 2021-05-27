import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartSingleItem from './CartSingleItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, totalAmount, clearCart, increaseCount }) => {

    return (
        <Container>
            <h1>Cart</h1>

            <Row>

            <Col xs={12} md={12} xl={5}>
            { cart.length ?
                cart.map(cartItem => <CartSingleItem key={cartItem.id} cartItem={cartItem} cart={cart} increaseCount={increaseCount}/>)
                : <p style={{ fontSize: '1.3rem' }}>Your Cart is empty...</p>
            }
            </Col>

            { cart.length ?
            <Col xs={12} md={4} xl={7} style={{ textAlign: 'center' }}>
                <h3>Total : {totalAmount} $</h3>
                <Button variant="danger" onClick={() => clearCart()}>Clear Cart <FontAwesomeIcon icon={ faTrashAlt } /></Button>
            </Col>
            : ''
            }


            </Row>



        </Container>
    )
}

export default Cart
