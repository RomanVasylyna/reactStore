import React from 'react';
import '../App.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";


const Product = ({ product }) => {

    // Styling

    const productCard = {
        cursor: 'pointer',
        width: '22rem',
        margin: '10px',
    }

    return (

        <Card style={productCard}>
            <Card.Img variant="top" src={product.imgSrc} />
            <Card.Body className="productCardBody">
                <Card.Title>

                    <LinkContainer to={`/product/${product.id}`} className="productLink">
                        <p>{product.brand} {product.name} ({product.price}$)</p>
                    </LinkContainer>

                </Card.Title>
                <Card.Text>
                    Описание Товара
                </Card.Text>
                <Button variant="primary"><FontAwesomeIcon icon={faCartPlus} /></Button>
            </Card.Body>
        </Card>


    )
}

export default Product
