import React, { useState, useEffect } from 'react';
import './App.css'; 


import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import DashboardBodega from './pages/DashboardBodega';
import CrearUsuario from './pages/CrearUsuario';
import InventarioCRUD from './pages/InventarioCRUD';
import Reportes from './pages/Reportes';
import AlertasStock from './pages/AlertasStock';
import ProductosCatalogo from './pages/ProductosCatalogo';
import Entradas from './pages/Entradas';
import SalidasForm from './pages/SalidasForm';
import PerfilUsuario from './pages/PerfilUsuario';

export default function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [rolUsuario, setRolUsuario] = useState(null); 
  const [vistaActual, setVistaActual] = useState('dashboard'); 
  const [seccionInterna, setSeccionInterna] = useState(null);

  const manejarLogin = (role = 'bodeguero') => {
    setUsuarioLogueado(true);
    setRolUsuario(role);
    setVistaActual('dashboard');
    setSeccionInterna(null);
  };

  const manejarCerrarSesion = () => {
    setUsuarioLogueado(false);
    setRolUsuario(null);
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
      
      {/* Sidebar de navegación */}
      <aside className="sidebar">
        <div className="logo-zound">Zound</div>
        <div className="subtitulo-logo">INVENTORY - HARVIC</div>

        <button 
          onClick={() => { setVistaActual('dashboard'); setSeccionInterna(null); }} 
          className={`menu-item ${vistaActual === 'dashboard' ? 'activo' : ''}`}
        >
            Panel Principal
        </button>

        <button 
          onClick={() => { setVistaActual('inventario'); setSeccionInterna(null); }} 
          className={`menu-item ${vistaActual === 'inventario' ? 'activo' : ''}`}
        >
            Inventario
        </button>

        <button 
          onClick={() => { setVistaActual('reportes'); setSeccionInterna(null); }} 
          className={`menu-item ${vistaActual === 'reportes' ? 'activo' : ''}`}
        >
            Reportes
        </button>

        <button 
          onClick={() => { setVistaActual('productos'); setSeccionInterna(null); }} 
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

        {rolUsuario === 'admin' && (
          <button 
            onClick={() => { setVistaActual('crear-usuario'); setSeccionInterna(null); }} 
            className={`menu-item ${vistaActual === 'crear-usuario' ? 'activo' : ''}`}
            style={{ color: '#4da6ff' }}
          >
              Crear Usuario
          </button>
        )}
        
        <div style={{ flex: 1 }}></div>

        <button 
          onClick={() => { setVistaActual('perfil'); setSeccionInterna(null); }} 
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

      {/* Contenido Principal */}
      <main className="contenido-principal">
        
        {vistaActual === 'dashboard' && (
          <div>
            {rolUsuario === 'admin' ? (
              <Dashboard onNavigate={setVistaActual} />
            ) : (
              <DashboardBodega onNavigate={setVistaActual} />
            )}
          </div>
        )}

        {vistaActual === 'entradas' && <Entradas backToDashboard={irAlDashboard} />}
        {vistaActual === 'salidas' && <SalidasForm backToDashboard={irAlDashboard} />}
        {vistaActual === 'inventario' && <InventarioCRUD backToDashboard={irAlDashboard} />}
        {vistaActual === 'reportes' && <Reportes backToDashboard={irAlDashboard} />}
        {vistaActual === 'productos' && <ProductosCatalogo backToDashboard={irAlDashboard} />}
        {vistaActual === 'alertas' && <AlertasStock backToDashboard={irAlDashboard} />}
        {vistaActual === 'perfil' && <PerfilUsuario backToDashboard={irAlDashboard} />}
        {vistaActual === 'crear-usuario' && <CrearUsuario backToDashboard={irAlDashboard} />}

      </main>
    </div>
  );
}