import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Products from './products';
// import ThemeContext from './ThemeContext';

// При помощи функции connect() мы соединяем компонент с Redux store
import { connect } from 'react-redux';
// Импортируем экшны
import { setProducts, addItemToCart } from './components/store/actions';

function App() {

    // Используем контекст апи для смены темы
    // const [theme, setTheme] = useState('bg-light');

    // Задаем state продуктов
    // const [products, setProducts] = useState([]);

    // Задаем state корзины
    const [cart, setCart] = useState([]);

    // Задаем state тотал эмаунт
    const [totalAmount, setTotalAmount] = useState(0);

    // Добавляем товар в корзину
    const addToCart = id => {
        let newProduct = products.filter(product => product.id === id)[0];
        // меняем store при помощи пропсов из mapStateToProps а также dispatch
        this.props.dispatch(addItemToCart({ id, count: 1, cartPrice: newProduct.price, product: newProduct}));

        // setCart([...cart, { id, count: 1, cartPrice: newProduct.price, product: newProduct  }]);
    }

    const getTotalAmount = () => {
        let sum = 0;
        cart.forEach(cartItem => sum += +cartItem.cartPrice);
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
        setCart(cart.map(item => item.id === id ? { ...item, count: item.count + 1, cartPrice: item.product.price * (item.count+1) } : item));
        // Каждый раз обновляем состояние totalAmount при ре-рендере
        setTotalAmount(getTotalAmount());
    }

    const decreaseCount = id => {
        // Увеличиваем счетчик в корзине
        setCart(cart.map(item => item.id === id ? { ...item, count: item.count >= 2 ? item.count -1 : 1, cartPrice: item.product.price * (item.count-1) } : item));

        // Каждый раз обновляем состояние totalAmount при ре-рендере
        setTotalAmount(getTotalAmount());
    }


    useEffect(() => {
        // Берем массив из отдельного компонента
        // setProducts(Products());

        this.props.dispatch(setProducts(Products()));

        // Каждый раз обновляем состояние totalAmount при ре-рендере
        setTotalAmount(getTotalAmount());

    }, [cart]) //totalAmount

    return (
        <div className={`main bg-light`}>
            {/* <ThemeContext.Provider value={theme, setTheme}> */}
            <Navigation
                products={products}
                cart={cart}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
                totalAmount={totalAmount}
                clearCart={clearCart}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                />
                {/* </ThemeContext.Provider> */}
        </div>
    );

}

// Для того чтобы получить конкретный элемент из стора мы мапим стор при помощи
// mapStateToProps и таким образом тот элемент который нам нужно вытянуть из стора
// передается посредствам пропсов
const mapStateToProps = state => ({
products: state.products,
cart: state.cart
});



export default connect(mapStateToProps)(App);
