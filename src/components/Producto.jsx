import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eliminarProductoAction } from '../reducers/productos/productosSlice';
import { elmiminarProducto } from '../api';
import { toast } from 'react-toastify';

const Producto = ({ producto }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td className="d-flex flex-column">
                <button
                    onClick={() => {
                        navigate(`/productos/editar/${producto.id}`);
                    }}
                    type="button"
                    className=" btn btn-warning "
                >
                    Editar
                </button>
                <button
                    onClick={() => {
                        elmiminarProducto(producto.id);
                        dispatch(eliminarProductoAction(producto.id));
                        toast.success('Producto eliminado correctamente');
                    }}
                    type="button"
                    className=" btn btn-danger mt-2"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Producto;
