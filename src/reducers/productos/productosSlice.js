import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productos: [],
};

const productosSlice = createSlice({
    name: 'productos',
    initialState,
    reducers: {
        setProductosAction: (state, action) => {
            state.productos = action.payload;
        },
        agregarProductoAction: (state, action) => {
            state.productos = [...state.productos, action.payload];
        },
        eliminarProductoAction: (state, action) => {
            const productosActualizados = state.productos.filter(
                (producto) => producto.id !== action.payload
            );

            state.productos = productosActualizados;
        },
    },
});

export const {
    agregarProductoAction,
    setProductosAction,
    editarProductoAction,
    eliminarProductoAction,
} = productosSlice.actions;

export default productosSlice.reducer;
