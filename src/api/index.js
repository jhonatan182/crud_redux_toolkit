import clienteAxios from '../config/axios';

export const obtenerProducto = async (id) => {
    try {
        const { data } = await clienteAxios.get(`/productos/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const nuevoProducto = async (producto) => {
    try {
        await clienteAxios.post('/productos', producto, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const elmiminarProducto = async (id) => {
    try {
        await clienteAxios.delete(`/productos/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const editarProducto = async (producto) => {
    try {
        await clienteAxios.put(`/productos/${producto.id}`, producto, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.log(error);
    }
};
