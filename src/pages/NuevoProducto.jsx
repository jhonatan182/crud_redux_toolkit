import Formulario from '../components/Formulario';

const NuevoProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <Formulario />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;
