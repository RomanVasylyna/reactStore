import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Cart = () => {

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
    }


    return (
        <Container>
            <h1>Cart</h1>

            <Row style={{ margin: '20px 0px' }}>

                <Col sm={3}>
                    <Image src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_458,c_limit/6d21d736-6a4b-441b-b756-c6d591a379d3/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-zoomx-vaporfly-next-2-og-dxSLFw.png" fluid></Image>
                </Col>

                <Col sm={3} style={{ textAlign: 'center' }}>
                    <p style={cartText}>Product Name</p>
                    <p style={cartText}>Description</p>
                    <hr></hr>
                    <button style={amountBtn}>-</button>
                    <span style={amountSpan}>0</span>
                    <button style={amountBtn}>+</button>
                    <p style={cartPrice}>Price : 0$</p>
                </Col>

                <Col sm={6}>
                    <p style={cartText}>Checkout</p>
                </Col>

            </Row>

        </Container>
    )
}

export default Cart
