import React from 'react';
import { Container } from 'react-bootstrap';
import CartSingleItem from './CartSingleItem';

const Cart = ({ cart }) => {

    return (
        <Container>
            <h1>Cart</h1>

            { cart.length ?
                cart.map(cartItem => <CartSingleItem key={cartItem.id} cartItem={cartItem} cart={cart}/>)
                : <p style={{ fontSize: '1.3rem'}}>Your Cart is empty...</p>
            }



        </Container>
    )
}

export default Cart
