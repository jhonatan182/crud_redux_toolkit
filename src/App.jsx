import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import Productos from './pages/Productos';
import NuevoProducto from './pages/NuevoProducto';
import EditarProducto from './pages/EditarProducto';
import 'react-toastify/dist/ReactToastify.css';

//? redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Productos />} />

                        <Route
                            path="/productos/nuevo"
                            element={<NuevoProducto />}
                        />

                        <Route
                            path="/productos/editar/:id"
                            element={<EditarProducto />}
                        />
                    </Route>
                </Routes>
            </Provider>

            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
