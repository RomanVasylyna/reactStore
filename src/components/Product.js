import React, { useState, useEffect } from 'react';
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


const Product = ({ product, onAddToCart, cart }) => {

    // Убираем дубликаты товаров из корзины
    const [addedItem, setAddedItem] = useState(true);

    useEffect(() => {
        setAddedItem(!cart.filter(cartItem => cartItem.id === product.id).length);
    }, [cart]);

    // Styling

    const productCard = {
        width: '22rem',
        margin: '10px',
    }

    return (

        <Card style={productCard}>

            {/* Link */}
            <LinkContainer to={`/product/${product.id}`} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={product.imgSrc} />
            </LinkContainer>

            <Card.Body className="productCardBody">
                <Card.Title>

                    {/* Link */}
                    <LinkContainer to={`/product/${product.id}`} className="productLink">
                        <p>{product.brand} {product.name} ({product.price}$)</p>
                    </LinkContainer>

                </Card.Title>
                <Card.Text>
                    Описание Товара
                </Card.Text>

                {addedItem ?
                    <Button variant="primary" onClick={() => onAddToCart(product.id)}>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                    :
                    <Button variant="danger">
                        <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                }

                {/* из child элемента напрямую никак нельзя передать пропсы,
                но можно вызвать функцию, которая в свою очередь поменяет state
                у родительского компонента
                */}

            </Card.Body>
        </Card>


    )
}

export default Product
