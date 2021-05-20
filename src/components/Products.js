import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';

const Products = ({products}) => {

    let [ productToCart, setProductToCart ] = useState([]);

    return (
        <Container>
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                {products.map(product =>
                    <Product key={product.id}
                        product={product} />
                )}
            </Row>
        </Container>
    )
}

export default Products
