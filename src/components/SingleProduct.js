import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const SingleProduct = () => {

    return (
        <Container className="container">
            <h1>Product Name</h1>
            <Row style={{ margin: '20px 0px' }}>

                <Col sm={5}>
                    <Image src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_330,c_limit/z12golttmgjbp3zhxvvq/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-revolution-5-FDtTsz.png" fluid></Image>
                </Col>

                <Col sm={7} style={{ marginTop: '50px' }}>
                    <p style={{ fontSize: '1.3em' }}>Твоя крылатая рабочая лошадка возвращается. Кроссовки Nike Air Zoom Pegasus 38 By You с подошвой из пеноматериала как в предыдущей версии обеспечивают амортизацию при каждом шаге. Прочный верх из сетки обеспечивает комфорт, а система FlyEase, которую можно выбрать при желании, позволяет быстро надевать и снимать обувь.</p>
                    <Button><FontAwesomeIcon icon={faCartPlus} /></Button>
                </Col>

            </Row>
        </Container>
    )
}

export default SingleProduct
