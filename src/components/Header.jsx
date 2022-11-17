import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link className="text-light" to={'/'}>
                        CRUD - REACT, REDUX, REST API & AXIOS
                    </Link>
                </h1>
            </div>

            <Link
                to="/productos/nuevo"
                className="btn btn-danger nuevo-post d-block text-white font-weight-bold d-md-inline-block"
            >
                Agregar producto &#43;
            </Link>
        </nav>
    );
};

export default Header;
