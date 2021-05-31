import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';


function App() {

    // убрать повторы из массива
    // добавить total price
    // если такой товар уже есть в корзине то менять кол-во в инпуте
    // добавить возможность удаления товара из корзины
    // добавить возможность добавлять товар в корзину из компонента SingleProduct

    // Задаем state продуктов
    const [products, setProducts] = useState([]);

    // Задаем state корзины
    const [cart, setCart] = useState([]);

    // Задаем state тотал эмаунт
    const [totalAmount, setTotalAmount] = useState(0);

    // Добавляем товар в корзину
    const addToCart = id => {
        setCart([...cart, { id, count: 1, cartPrice: products.map(product => product.id === id ? product.price : 0), product: products.filter(product => product.id === id)[0] }]);
    }

    const getTotalAmount = () => {
        let sum = 0;
        cart.forEach(cartItem => sum += +cartItem.product.price);
        return sum;
    }
    
    // Удаляем продукт из корзины
    const removeFromCart = id => {
        setCart(cart.filter(item => item.id !== id));
    }
    
    // Очищаем корзину
    const clearCart = () => {
        setCart([]);
    }

    const increaseCount = id => {
        // Увеличиваем счетчик в корзине
        setCart(cart.map(item => item.id === id ? { ...item, count: item.count + 1, cartPrice: item.product.price * (item.count+1) } : item));
        // Нужно взять price у продукта и умножить на counter из корзины
        // setProducts(products.filter(product => product.id === id ? { ...product, price: (+product.price * +cart.filter(cartItem => cartItem.id === id ? cartItem.count : '')) } : product));
    }


    useEffect(() => {
        setProducts([
            {
                id: 1, name: 'Air Zoom Pegasus',
                brand: 'Nike', price: 199.99,
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_458,c_limit/f9a8bf44-6a52-4107-ba5f-78ed8118ee36/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-zoom-pegasus-38-Rl7WJR.png',
                description: 'Твоя крылатая рабочая лошадка возвращается. Кроссовки Nike Air Zoom Pegasus 38 с упругой подошвой из пеноматериала как в предыдущей версии обеспечивают амортизацию при каждом шаге. Прочный верх из сетки обеспечивает комфорт, а система FlyEase позволяет быстро надевать обувь.'
            },

            {
                id: 2, name: 'ZoomX Vaporfly Next% 2',
                brand: 'Nike', price: 250.99,
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_458,c_limit/6d21d736-6a4b-441b-b756-c6d591a379d3/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2-zoomx-vaporfly-next-2-og-dxSLFw.png',
                description: 'Эти беговые кроссовки созданы для новых целей и рекордов и воплощают новый этап эволюции скорости.Кроссовки Nike ZoomX Vaporfly Next% 2 "OG" созданы на основе всеми любимой модели для забегов.Обновленный верх обеспечивает комфорт и воздухопроницаемость.От дистанции в 10 км до марафона — эта модель обеспечивает мгновенную амортизацию и надежную поддержку, помогая тебе стать еще лучше.'
            },

            {
                id: 3, name: 'Revolution 5',
                brand: 'Nike', price: 350.99,
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_330,c_limit/z12golttmgjbp3zhxvvq/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-revolution-5-FDtTsz.png',
                description: 'Кроссовки Nike Revolution 5 обеспечивают комфорт во время бега благодаря мягкому пеноматериалу. Легкий трикотажный материал обхватывает стопу, обеспечивая воздухопроницаемость и поддержку, а минималистичный дизайн подходит для любой ситуации.'
            },

            {
                id: 4, name: 'Utility Elite',
                brand: 'Nike', price: 420.99,
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_330,c_limit/i1-907df49d-7af4-4d80-9074-06be5341f89b/%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-utility-elite-GzKVWH.png',
                description: 'Рюкзак Nike Utility Elite позволяет аккуратно и организованно хранить экипировку при перемещениях по городу. Мягкие лямки обеспечивают комфорт, а благодаря широкому отверстию можно легко добраться до необходимых предметов.'
            },

            {
                id: 5, name: 'Flex Stride',
                brand: 'Nike', price: 49.99,
                imgSrc: ' https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_330,c_limit/aebea33f-659b-4308-b344-97240b8531a7/%D0%B1%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5-%D1%88%D0%BE%D1%80%D1%82%D1%8B-2-%D0%B2-1-flex-stride-13-%D1%81%D0%BC-X64rFj.png',
                description: 'Шорты Nike Flex из легкой и эластичной ткани обеспечивают комфорт и свободу движений во время любых тренировок.'
            },

            {
                id: 6, name: 'Essential',
                brand: 'Nike', price: 99.99,
                imgSrc: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_330,c_limit/c902698e-6365-4a30-89b2-ffcbff6faaf6/%D1%84%D0%BB%D0%B8%D1%81%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B1%D1%80%D1%8E%D0%BA%D0%B8-sportswear-essential-k62xpw.png',
                description: 'Леггинсы Nike — это концептуальная и функциональная модель, созданная Nike в сотрудничестве с Мэттью М. Уильямсом.Благодаря влагоотводящей ткани и продуманным зонам вентиляции они обеспечивают поддержку и комфорт в любое время года.Это следующий уровень твоих тренировок. Идеальны с точки зрения спорта, культуры и силы духа.'
            },

        ])

        // Каждый раз обновляем состояние totalAmount при ре-рендере
        setTotalAmount(getTotalAmount);

    }, [cart.length]) //totalAmount

    return (
        <div className="main">
            <Navigation
                products={products}
                cart={cart}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
                totalAmount={totalAmount}
                clearCart={clearCart}
                increaseCount={increaseCount} />
        </div>
    );

}



export default App;
