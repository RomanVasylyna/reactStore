import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../components/store/actions';

const SingleProduct = (props) => {

    // Параметр с id продукта который мы получаем от роута
    let { id } = useParams();

    // Получаем текущий продукт и загоняем его в state компонента
    let [product, setProduct] = useState({});

    // Убираем дубликаты товаров из корзины
    const [addedItem, setAddedItem] = useState(true);

    useEffect(() => {
        // Определяем текущий продукт
        setProduct(props.products.filter(product => product.id == id)[0]);
        // Убираем дубликаты из корзины
        setAddedItem(!props.cart.filter(cartItem => cartItem.id === product.id).length);
    }, [product, props.cart]);


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

                    { addedItem ?
                        <Button onClick={() => props.dispatch(addItemToCart(product))}>
                            Add To Cart <FontAwesomeIcon icon={faCartPlus} />
                        </Button>
                        :
                        <Button variant="danger" onClick={() => props.dispatch(removeItemFromCart(product.id))}>
                            Remove From Cart <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                    }

                </Col>

            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(SingleProduct);
