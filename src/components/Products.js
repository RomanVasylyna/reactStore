import React from 'react';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';

const Products = ({ products, onAddToCart, onRemoveFromCart, cart }) => {

    return (
        <Container>
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
