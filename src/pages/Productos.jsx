import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductosAction } from '../reducers/productos/productosSlice';
import clienteAxios from '../config/axios';
import Producto from '../components/Producto';

const Productos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const obtenerProductosAPI = async () => {
            const { data } = await clienteAxios.get('/productos');
            dispatch(setProductosAction(data));
        };

        obtenerProductosAPI();
    }, []);

    const { productos } = useSelector((state) => state.productos);

    return (
        <>
            <h2 className="text-center my-5">Listado de Productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos?.map((producto) => (
                        <Producto producto={producto} key={producto.id} />
                    ))}
                </tbody>
                <tbody></tbody>
            </table>
        </>
    );
};

export default Productos;
