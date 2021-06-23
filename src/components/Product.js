import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';
import { faCartPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
// Импортируем экшн на удаление товара из корзины
import { addItemToCart, removeItemFromCart } from '../components/store/actions';

const Product = (props) => {

    // Styling
    const productCard = {
        width: '22rem',
        margin: '10px',
    }

    //Убираем дубликаты товаров из корзины
    const [addedItem, setAddedItem] = useState(true);

    useEffect(() => {
        setAddedItem(!props.cart.filter(cartItem => cartItem.id === props.product.id).length);
    }, [props.cart]);


    return (

        <Card style={productCard}>

            {/* Link */}
            <LinkContainer to={`/product/${props.product.id}`} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={props.product.imgSrc} />
            </LinkContainer>

            <Card.Body className="productCardBody">
                <Card.Title>

                    {/* Link */}
                    <LinkContainer to={`/product/${props.product.id}`} className="productLink">
                        <p>{props.product.brand} {props.product.name} ({props.product.price}$)</p>
                    </LinkContainer>

                </Card.Title>
                <Card.Text>
                    Описание Товара
                </Card.Text>


                { addedItem ?
                    <Button variant="primary" onClick={() => props.dispatch(addItemToCart(props.product))}>
                        Add to Cart <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                    :
                    <Button variant="danger" onClick={() => props.dispatch(removeItemFromCart(props.product.id))}>
                        Remove From Cart <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                }

            </Card.Body>
        </Card>


    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
        products: state.products,
        product: ownProps.product
    }
};


export default connect(mapStateToProps)(Product);
