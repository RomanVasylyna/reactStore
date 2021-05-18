import React from 'react';
import '../App.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import SingleProduct from './SingleProduct';

import {
    BrowserRouter as Router,
    Switch,
    Route,
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

        <Router>

        <Switch>
            <Route path="/productID">
                <SingleProduct />
            </Route>
        </Switch>


        <Card style={productCard}>
            <Card.Img variant="top" src={product.imgSrc} />
            <Card.Body className="productCardBody">
                <Card.Title>

                <Link to={`/product/${product.id}`}
                 className="productLink">
                <p>{product.brand} {product.name} ({product.price}$)</p>
                </Link>
{/*
                <LinkContainer to={`product/${product.id}`}
                className="productLink">
                <p>{product.brand} {product.name} ({product.price}$)</p>
                </LinkContainer> */}

                </Card.Title>
                <Card.Text>
                    Описание Товара
                </Card.Text>
                <Button variant="primary"><FontAwesomeIcon icon={faCartPlus} /></Button>
            </Card.Body>
        </Card>
        </Router>
    )
}

export default Product
