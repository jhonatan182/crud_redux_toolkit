import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    producto: {},
};

const productoSlice = createSlice({
    name: 'producto',
    initialState,
    reducers: {
        setProductoAction: (state, action) => {
            state.producto = action.payload;
        },
    },
});

export const { setProductoAction } = productoSlice.actions;

export default productoSlice.reducer;
