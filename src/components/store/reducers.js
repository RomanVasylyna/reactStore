// Импортируем типы экшнов из отдельного файла
import constants from "./actionTypes";

// Создаем переменную где указываем дефолтное значение state
const initialState = {
    // По-умолчанию как продукты так и корзина пусты
    products: [],
    cart: [],
    totalAmount: 0,
    nationality: {}
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
            console.log(action.payload);
            return {
                ...state, products: action.payload
            }

        case constants.ADD_TO_CART:
            console.log(action.payload);
            return {
                ...state, cart: [...state.cart, action.payload]
            }

        case constants.REMOVE_FROM_CART:
            console.log(action.payload);
            return {
                ...state, cart: state.cart.filter(item => item.id !== action.payload)
            }

        case constants.CLEAR_CART:
            return {
                ...state,
                cart: initialState.cart,
                totalAmount: initialState.totalAmount,
                nationality: initialState.nationality
            }

        case constants.INCREASE_COUNT:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? { ...item, count: item.count + 1, cartPrice: item.product.price * (item.count + 1) } : item),
            }

        case constants.DECREASE_COUNT:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? { ...item, count: item.count >= 2 ? item.count - 1 : 1, cartPrice: item.product.price * (item.count - 1) } : item),
            }

        case constants.SET_TOTAL_AMOUNT:
            return {
                ...state, totalAmount: state.totalAmount = action.payload
            }

        case constants.SET_COUNTRY:
            return {
                ...state, nationality: { ...state.nationality, country: action.payload }
            }

        case constants.SET_CITY:
            return {
                ...state, nationality: { ...state.nationality, city: action.payload }
            }

        case constants.CLEAR_CITY:
            return {
                ...state, nationality: { ...state.nationality, city: "" }
            }


        // Дефолтный кейс, просто возвращаем дефолтный стейт
        default:
            return state;
    }
}

export default rootReducer;
