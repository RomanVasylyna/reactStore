import React from 'react';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';
// import Hello from './Hello';

const Products = ({ products, onAddToCart, onRemoveFromCart, cart }) => {

    return (
        <Container>
        {/* Studying useRef hook <Hello/> */}
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                {products.map(product =>
                    <Product key={product.id}
                        onAddToCart={onAddToCart}
                        product={product}
                        cart={cart}
                        onRemoveFromCart={onRemoveFromCart} />
                )}
            </Row>
        </Container>
    )
}

export default Products
