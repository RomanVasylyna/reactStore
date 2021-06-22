import React from 'react';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const Products = (props) => {

    return (
        <Container>
            {/* Studying useRef hook <Hello/> */}
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                {props.products.map(product =>
                    <Product product={product} key={product.id}/>
                )}
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    cart: state.cart
});

export default connect(mapStateToProps)(Products);
