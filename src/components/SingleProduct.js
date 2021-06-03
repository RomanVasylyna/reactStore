import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const SingleProduct = ({ products, onAddToCart, onRemoveFromCart, cart }) => {

    let { id } = useParams(); // Параметр с id продукта который мы получаем от роута

    let [product, setProduct] = useState([]);

    // Убираем дубликаты товаров из корзины
    const [addedItem, setAddedItem] = useState(true);

    useEffect(() => {
        setProduct(products.filter(product => product.id == id)[0]);
        setAddedItem(!cart.filter(cartItem => cartItem.id === product.id).length);
    }, [product.length, cart]);


    return (
        <Container className="container">

            <h1>{product.brand} {product.name}</h1>
            <h3>({product.price}$)</h3>

            <Row style={{ margin: '20px 0px' }}>

                <Col sm={5}>
                    <Image src={product.imgSrc} fluid></Image>
                </Col>

                <Col sm={7} style={{ marginTop: '50px' }}>
                    <p style={{ fontSize: '1.3em' }}>{product.description}</p>

                    {addedItem ?
                        <Button onClick={() => onAddToCart(product.id)}>Add To Cart <FontAwesomeIcon icon={faCartPlus} /></Button>
                        :
                        <Button variant="danger" onClick={() => onRemoveFromCart(product.id)}>Remove From Cart <FontAwesomeIcon icon={faTrashAlt} /></Button>
                    }

                </Col>

            </Row>
        </Container>
    )
}

export default SingleProduct
