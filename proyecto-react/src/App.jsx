import React, { useState, useEffect } from 'react';
import './App.css'; 


import Login from './pages/Login';
import InventarioCRUD from './pages/InventarioCRUD';
import Reportes from './pages/Reportes';
import AlertasStock from './pages/AlertasStock';
import ProductosCatalogo from './pages/ProductosCatalogo';
import EntradasForm from './pages/EntradasForm';
import SalidasForm from './pages/SalidasForm';
import PerfilUsuario from './pages/PerfilUsuario';

export default function App() {

  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [vistaActual, setVistaActual] = useState('dashboard'); 
  const [seccionInterna, setSeccionInterna] = useState(null);


  const manejarLogin = () => {
    setUsuarioLogueado(true);
    setVistaActual('dashboard');
  };


  const manejarCerrarSesion = () => {
    setUsuarioLogueado(false);
    setVistaActual('dashboard');
    setSeccionInterna(null);

    
    window.history.pushState(null, null, window.location.href);
  };


  useEffect(() => {
    if (!usuarioLogueado) {
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function () {
        window.history.go(1);
      };
    }
  }, [usuarioLogueado]);

  const irAlDashboard = () => {
    setVistaActual('dashboard');
    setSeccionInterna(null);
  };


  if (!usuarioLogueado) {
    return <Login onLogin={manejarLogin} />;
  }


  return (
    <div className="app-contenedor">
      
      
      <aside className="sidebar">
        <div className="logo-zound"> Zound</div>
        <div className="subtitulo-logo">INVENTORY</div>

        <button 
          onClick={() => setVistaActual('inventario')} 
          className={`menu-item ${vistaActual === 'inventario' ? 'activo' : ''}`}
        >
            Inventario
        </button>
        <button 
          onClick={() => setVistaActual('reportes')} 
          className={`menu-item ${vistaActual === 'reportes' ? 'activo' : ''}`}
        >
            Reportes
        </button>
        <button 
          onClick={() => setVistaActual('productos')} 
          className={`menu-item ${vistaActual === 'productos' ? 'activo' : ''}`}
        >
            Productos
        </button>
        <button 
          onClick={() => { setVistaActual('entradas'); setSeccionInterna(null); }} 
          className={`menu-item ${vistaActual === 'entradas' ? 'activo' : ''}`}
        >
            Entradas
        </button>
        <button 
          onClick={() => { setVistaActual('salidas'); setSeccionInterna(null); }} 
          className={`menu-item ${vistaActual === 'salidas' ? 'activo' : ''}`}
        >
            Salidas
        </button>
        
        <div style={{ flex: 1 }}></div>

        
        <button 
          onClick={() => setVistaActual('perfil')} 
          className={`menu-item ${vistaActual === 'perfil' ? 'activo' : ''}`}
          style={{ marginBottom: '5px' }}
        >
            Mi Perfil
        </button>

        
        <button 
          onClick={manejarCerrarSesion} 
          className="menu-item"
          style={{ color: '#ff4d4d', fontWeight: 'bold' }}
        >
            Cerrar Sesión
        </button>
      </aside>

      
      <main className="contenido-principal">
        
        
        {vistaActual === 'dashboard' && (
          <div>
            <div className="header-dashboard">
              <div>
                <h1 style={{ margin: 0, fontSize: '32px' }}>Panel de control</h1>
                <p style={{ color: '#888', margin: '5px 0 0 0' }}>Hola, Usuario X</p>
              </div>
              <div className="logo-harvic">
                Harvic <span className="menu-hamburguesa">☰</span>
              </div>
            </div>

            <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Accesos Rápidos</h2>
            <div className="grid-tarjetas">
              <div onClick={() => setVistaActual('inventario')} className="tarjeta-accion">
                <span className="icono-tarjeta"></span>
                <h3>Ver Inventario</h3>
              </div>
              <div onClick={() => setVistaActual('alertas')} className="tarjeta-accion">
                <span className="icono-tarjeta"></span>
                <h3>Alertas de Stock</h3>
              </div>
            </div>
          </div>
        )}

        
        {vistaActual === 'entradas' && (
          <div>
            {!seccionInterna ? (
              <div>
                <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Panel de control</h1>
                <p style={{ color: '#888', marginBottom: '30px' }}>Hola, Usuario X</p>
                <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Inventario (Entradas)</h2>
                
                <div className="grid-tarjetas">
                  <div onClick={() => setSeccionInterna('registrar-entrada')} className="tarjeta-accion">
                    <span className="icono-tarjeta"></span>
                    <h3>Registrar Entradas</h3>
                  </div>
                  <div onClick={() => setSeccionInterna('ver-entradas')} className="tarjeta-accion">
                    <span className="icono-tarjeta"></span>
                    <h3>Ver Entradas</h3>
                  </div>
                </div>
              </div>
            ) : seccionInterna === 'registrar-entrada' ? (
              <EntradasForm backToDashboard={irAlDashboard} />
            ) : (
              <div>
                <button onClick={() => setSeccionInterna(null)} className="btn-atras">← Atrás</button>
                <div className="tabla-contenedor">
                  <h2>Vista Entradas</h2>
                  <input type="text" placeholder=" Buscar" className="buscar-input" />
                </div>
                <table className="tabla-zound">
                  <thead>
                    <tr>
                      <th>Código registro</th>
                      <th>Fecha</th>
                      <th>Observación</th>
                      <th style={{ textAlign: 'center' }}>Descargar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0001987</td>
                      <td>31/09/25</td>
                      <td className="texto-opaco">XXXXXXXXXXXXXXXXXXXX</td>
                      <td className="icono-descarga"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        
        {vistaActual === 'salidas' && (
          <div>
            {!seccionInterna ? (
              <div>
                <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Panel de control</h1>
                <p style={{ color: '#888', marginBottom: '30px' }}>Hola, Usuario X</p>
                <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Inventario (Salidas)</h2>
                
                <div className="grid-tarjetas">
                  <div onClick={() => setSeccionInterna('registrar-salida')} className="tarjeta-accion">
                    <span className="icono-tarjeta"></span>
                    <h3>Registrar Salidas</h3>
                  </div>
                  <div onClick={() => setSeccionInterna('ver-salidas')} className="tarjeta-accion">
                    <span className="icono-tarjeta"></span>
                    <h3>Ver Salidas</h3>
                  </div>
                </div>
              </div>
            ) : seccionInterna === 'registrar-salida' ? (
              <SalidasForm backToDashboard={irAlDashboard} />
            ) : (
              <div>
                <button onClick={() => setSeccionInterna(null)} className="btn-atras"> Atrás</button>
                <div className="tabla-contenedor">
                  <h2>Vista Salidas</h2>
                  <input type="text" placeholder=" Buscar" className="buscar-input" />
                </div>
                <table className="tabla-zound">
                  <thead>
                    <tr>
                      <th>Código registro</th>
                      <th>Fecha Salida</th>
                      <th>Observación</th>
                      <th style={{ textAlign: 'center' }}>Descargar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>005625</td>
                      <td>31/09/25</td>
                      <td className="texto-opaco">XXXXXXXXXXXXXXXXXXXX</td>
                      <td className="icono-descarga"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        
        {vistaActual === 'inventario' && <InventarioCRUD backToDashboard={irAlDashboard} />}
        {vistaActual === 'reportes' && <Reportes backToDashboard={irAlDashboard} />}
        {vistaActual === 'productos' && <ProductosCatalogo backToDashboard={irAlDashboard} />}
        {vistaActual === 'alertas' && <AlertasStock backToDashboard={irAlDashboard} />}
        {vistaActual === 'perfil' && <PerfilUsuario backToDashboard={irAlDashboard} />}

      </main>
    </div>
  );
}