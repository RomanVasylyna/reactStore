import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const CartSingleItem = ({ cartItem, increaseCount }) => {

    // Умножаем price на counter


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
                        <Image src={cartItem.product.imgSrc} fluid></Image>
                    </Col>

                    <Col sm={3} md={6} style={{ textAlign: 'center' }}>
                        <p style={cartText}>{cartItem.product.name}</p>
                        <hr></hr>
                        <button style={amountBtn}>-</button>
                        <span style={amountSpan}>{cartItem.count}</span>
                        <button style={amountBtn} onClick={() => increaseCount(cartItem.id)}>+</button>
                        <p style={cartPrice}>Price/Per Item : {cartItem.count * cartItem.product.price}$</p>
                    </Col>

                </Row>

        </>
    )
}

export default CartSingleItem