import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import productsData from './productsData';
// При помощи функции connect() мы соединяем компонент с Redux store
import { connect } from 'react-redux';
// Импортируем экшны
import { setProducts, setTotalAmount } from './components/store/actions';

function App(props) {

    // Получаем тотал по корзине
    // Спецом из главного компонента чтобы это было доступно по всему приложению
    const getTotalAmount = () => {
        let sum = 0;
        props.cart.forEach(cartItem => sum += +cartItem.cartPrice);
        return sum;
    }

    useEffect(() => {
        // Задаем дефолтные продукты в store
        props.dispatch(setProducts(productsData()));
        // Проверяем не изменился ли total Price
        props.dispatch(setTotalAmount(getTotalAmount()));
    }, [props.cart]) //totalAmount

    return (
        <div className={`main bg-light`}>
            <Navigation />
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
