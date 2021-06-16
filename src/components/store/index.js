// Импортируем возможность создания store
import {createStore} from 'redux';
// Импортируем главный reducer
import rootReducer from './reducers';

// Создаем store который в качестве параметра принимает reducer
// по непонятным мне причинам расширение redux devtools в хроме не работает
// по этому пришлось вручную добавить вторым параметром после reducera
// отображение данного расширения
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;