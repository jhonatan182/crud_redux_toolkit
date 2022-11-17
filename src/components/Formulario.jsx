import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { agregarProductoAction } from '../reducers/productos/productosSlice';
import { nuevoProducto, editarProducto } from '../api';

const Formulario = () => {
    //navigate
    const navigate = useNavigate();
    //params
    const params = useParams();
    //dispatch
    const dispatch = useDispatch();
    //pruducto del state
    const productoState = useSelector((state) => state.producto);

    // state
    const [producto, setProducto] = useState({
        id: null,
        nombre: '',
        precio: 0,
    });

    useEffect(() => {
        if (params.id) {
            setProducto(productoState.producto);
        }
    }, [productoState]);

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        });
    };

    const hadleSubmit = async (e) => {
        e.preventDefault();

        // validar formulario
        const { nombre, precio } = producto;
        if (nombre.trim() === '' || Number(precio) <= 0) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        if (params.id) {
            try {
                await editarProducto(producto);
                navigate('/');
                toast.success('Producto actualizado correctamente');
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                await nuevoProducto(producto);
                dispatch(agregarProductoAction(producto));
                navigate('/');
                toast.success('Producto creado correctamente');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <form onSubmit={hadleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre Producto</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    id="nombre"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="precio">Precio Producto</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    id="precio"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
                Agregar
            </button>
        </form>
    );
};

export default Formulario;
