import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const SingleProduct = () => {
    return (
        <Container>
        <h1>Product Title</h1>      
        <Row>

        <Col sm={5} style={{ textAlign:'center' }}>
         <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_330,c_limit/z12golttmgjbp3zhxvvq/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-revolution-5-FDtTsz.png"></img>
         </Col>

         <p>Твоя крылатая рабочая лошадка возвращается. Кроссовки Nike Air Zoom Pegasus 38 By You с подошвой из пеноматериала как в предыдущей версии обеспечивают амортизацию при каждом шаге. Прочный верх из сетки обеспечивает комфорт, а система FlyEase, которую можно выбрать при желании, позволяет быстро надевать и снимать обувь.</p>
         </Row>
        </Container>
    )
}

export default SingleProduct
