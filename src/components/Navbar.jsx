import { Link } from "react-router-dom";

function Navbar (){
    return (
    <div className="row g-0">
        <div className="col-md-3 col-lg-2">
            <nav className="sidebar p-3">
                <div className="sidebar-wrapper">
                    <div>
                        <h4 className="text-music fw-bold text-center mb-4 mt-2">ZoundInventory</h4>
                        <ul className="nav flex-column gap-2">
                            <li className="nav-item"><a className="nav-link text-white fw-bold bg-secondary bg-opacity-25 rounded p-2" href="dashboard.html">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link text-white-50 p-2" href="perfil.html">Mi Perfil</a></li>
                            <li className="nav-item"><a className="nav-link text-white-50 p-2" href="proveedores.html">Proveedores</a></li>
                            <li className="nav-item"><a className="nav-link text-white-50 p-2" href="alertas.html">Alertas Stock</a></li>
                            <li className="nav-item"><a className="nav-link text-white-50 p-2" href="actualizarproducto.html">Actualizar Producto</a></li>
                            <li className="nav-item"><a className="nav-link text-white-50 p-2" href="agregarproductos.html">Agregar Producto</a></li>
                            <li className="nav-item"><a className="nav-link text-white-50 p-2" href="crud.html">CRUD</a></li>
                            <li className="nav-item"><a className="nav-link text-white-50 p-2" href="movimientos.html">Importadores</a></li>
                            <li className="nav-item"><a className="nav-link text-white-50 p-2" href="productos.html">Productos</a></li>
                        </ul>
                    </div>
                    <div className="mb-3">
                        <a className="nav-link text-danger p-2 fw-bold text-center border border-danger border-opacity-25 rounded bg-danger bg-opacity-10"
                            href="./index.html">Cerrar Sesión</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
 );
}
export default Navbar