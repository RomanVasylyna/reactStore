import React from 'react';
import '../App.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Product = ({ product }) => {
    return (
        <Card className="productCard">
            <Card.Img variant="top" src={product.imgSrc} />
            <Card.Body className="productCardBody">
                <Card.Title>
                    <a className="productLink" href="productId">{product.brand} {product.name} ({product.price}$)</a>
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
