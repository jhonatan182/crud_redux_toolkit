import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { obtenerProducto } from '../api';
import { setProductoAction } from '../reducers/producto/productoSlice';
import Formulario from '../components/Formulario';

const EditarProducto = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProductoApi = async () => {
            const producto = await obtenerProducto(params.id);
            if (!producto) navigate('/');

            dispatch(setProductoAction(producto));
        };

        obtenerProductoApi();
    }, []);

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <Formulario />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarProducto;
