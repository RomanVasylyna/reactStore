import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const SingleProduct = ({ products }) => {

    let { id } = useParams(); // Параметр с id продукта который мы получаем от роута
    console.log(id);

    let [product, setProduct] = useState([]);


    useEffect(() => {
        setProduct(products.filter(product => product.id == id)[0]);
        console.log(setProduct);
    }, [])


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
                    <Button><FontAwesomeIcon icon={faCartPlus} /></Button>
                </Col>

            </Row>
        </Container>
    )
}

export default SingleProduct
