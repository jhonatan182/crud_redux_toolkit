import { configureStore } from '@reduxjs/toolkit';
import productosReducer from './reducers/productos/productosSlice';
import productoReducer from './reducers/producto/productoSlice';

const store = configureStore({
    reducer: {
        productos: productosReducer,
        producto: productoReducer,
    },
});

export default store;
