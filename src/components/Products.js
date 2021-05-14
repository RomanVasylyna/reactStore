import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            {
                id: 1, name: 'Air Zoom Pegasus',
                brand: 'Nike', price: '199.99',
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_458,c_limit/f9a8bf44-6a52-4107-ba5f-78ed8118ee36/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-zoom-pegasus-38-Rl7WJR.png'
            },

            {
                id: 2, name: 'ZoomX Vaporfly Next% 2',
                brand: 'Nike', price: '250.99',
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_458,c_limit/6d21d736-6a4b-441b-b756-c6d591a379d3/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-zoomx-vaporfly-next-2-og-dxSLFw.png'
            },

            {
                id: 3, name: 'Revolution 5',
                brand: 'Nike', price: '350.99',
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_330,c_limit/z12golttmgjbp3zhxvvq/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-revolution-5-FDtTsz.png'
            },

            {
                id: 4, name: 'Utility Elite',
                brand: 'Nike', price: '420.99',
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_330,c_limit/i1-907df49d-7af4-4d80-9074-06be5341f89b/%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-utility-elite-GzKVWH.png'
            },

            {
                id: 5, name: 'Flex Stride',
                brand: 'Nike', price: '49.99',
                imgSrc: ' https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_330,c_limit/aebea33f-659b-4308-b344-97240b8531a7/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D1%88%D0%BE%D1%80%D1%82%D1%8B-2-%D0%B2-1-flex-stride-13-%D1%81%D0%BC-X64rFj.png'
            },

            {
                id: 6, name: 'Essential',
                brand: 'Nike', price: '99.99',
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_330,c_limit/c902698e-6365-4a30-89b2-ffcbff6faaf6/%D1%84%D0%BB%D0%B8%D1%81%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B1%D1%80%D1%8E%D0%BA%D0%B8-sportswear-essential-k62xpw.png'
            },

        ])
    }, [])

    return (
        <Container>
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                {products.map(product =>
                    <Product key={product.id}
                        product={product} />
                )}
            </Row>
        </Container>
    )
}

export default Products
