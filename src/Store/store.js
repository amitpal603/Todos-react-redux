import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../Features/todo/todoSlice'

export const Store = configureStore({
    reducer : TodoReducer
})