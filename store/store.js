import { createStore } from "redux"

import todoReducer from './reducers/todo';

export default createStore(todoReducer)