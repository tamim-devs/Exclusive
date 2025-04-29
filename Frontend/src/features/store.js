import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './counter/counterSlice'
import {productApi} from './Api/productApi'
import { exclusiveApi } from './Api/exclusiveApi'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware).concat(exclusiveApi.middleware)
})