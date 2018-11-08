import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import todoReducer from '../store/reducer/todoReducer'

const rootReducers = combineReducers({
    todoReducer
})

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store