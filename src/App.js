import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import productsData from './productsData';
// При помощи функции connect() мы соединяем компонент с Redux store
import { connect } from 'react-redux';
// Импортируем экшны
import { setProducts, addItemToCart, removeItemFromCart } from './components/store/actions';


function App(props) {

    // Задаем state корзины
    // const [cart, setCart] = useState([]);

    // Задаем state тотал эмаунт
    const [totalAmount, setTotalAmount] = useState(0);

    // Добавляем товар в корзину
    const addToCart = id => {
        let newProduct = props.products.filter(product => product.id === id)[0];
        props.dispatch(addItemToCart({ id, count: 1, cartPrice: newProduct.price, product: newProduct }));
    }

    // const getTotalAmount = () => {
    //     let sum = 0;
    //     cart.forEach(cartItem => sum += +cartItem.cartPrice);
    //     return sum;
    // }

    // Удаляем продукт из корзины
    const removeFromCart = id => {
        props.dispatch(removeItemFromCart(props.cart.filter(item => item.id !== id)))
        // setCart(cart.filter(item => item.id !== id));
    }

    // Очищаем корзину
    // const clearCart = () => {
    //     setCart([]);
    // }

    // const increaseCount = id => {
    //     setCart(cart.map(item => item.id === id ? { ...item, count: item.count + 1, cartPrice: item.product.price * (item.count+1) } : item));
    //     // Каждый раз обновляем состояние totalAmount при ре-рендере
    //     setTotalAmount(getTotalAmount());
    // }

    // const decreaseCount = id => {
    //     // Увеличиваем счетчик в корзине
    //     setCart(cart.map(item => item.id === id ? { ...item, count: item.count >= 2 ? item.count -1 : 1, cartPrice: item.product.price * (item.count-1) } : item));

    //     // Каждый раз обновляем состояние totalAmount при ре-рендере
    //     setTotalAmount(getTotalAmount());
    // }


    useEffect(() => {
        // Задаем дефолтные продукты в store
        props.dispatch(setProducts(productsData()));

        // Каждый раз обновляем состояние totalAmount при ре-рендере
        // setTotalAmount(getTotalAmount());

    }, [props.cart]) //totalAmount

    return (
        <div className={`main bg-light`}>
            <Navigation
            // products={props.products}
            // cart={props.cart}
            // onAddToCart={addToCart}
            // onRemoveFromCart={removeFromCart}
            // totalAmount={totalAmount}
            // clearCart={clearCart}
            // increaseCount={increaseCount}
            // decreaseCount={decreaseCount}
            />
        </div>
    );

}

// Для того чтобы получить конкретный элемент из стора мы мапим стор при помощи
// mapStateToProps и таким образом тот элемент который нам нужно вытянуть из стора
// передается посредствам пропсов
const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}



export default connect(mapStateToProps)(App);
