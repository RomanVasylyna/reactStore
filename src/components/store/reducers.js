// Импортируем типы экшнов из отдельного файла
import constants from "./actionTypes";

// Создаем переменную где указываем дефолтное значение state
const initialState = {
    // По-умолчанию как продукты так и корзина пусты
    products: [],
    cart: []
}

// Создаем редьюсер, который являет собой switch case где условиями являются типы экшнов
// У нас есть два параметра, state который по-умолчанию равен вышеупомянутой переменной
// а также экшн, хотя по-сути, мы больше отталкиваемся от типа экшна
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Тип экшна мы берем из отдельного заимпорченного файла
        // экшн SET_PRODUCTS по-сути равен записи  const [products, setProducts] = useState([]);
        // только вместо обычного хука useState в рамках одного компонента мы задаем state вообще во всем сторе
        case constants.SET_PRODUCTS:
            return {
                ...state, products: action.payload
            }
        case constants.ADD_TO_CART:
            console.log(action.payload);
            return {
                ...state, cart: [...state.cart, action.payload]
            }
        // Дефолтный кейс, просто возвращаем дефолтный стейт
        default:
            return state;
    }
}

export default rootReducer;
