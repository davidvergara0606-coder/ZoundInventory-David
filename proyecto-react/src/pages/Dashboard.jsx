import React from 'react';

export default function Dashboard({ onLogout, setVistaActual }) {
  return (
    <div className="dashboard-layout" style={{ display: 'flex', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      
      
      <aside className="sidebar" style={{ width: '250px', backgroundColor: '#111', padding: '20px' }}>
        <div className="brand" style={{ marginBottom: '40px' }}>
          <h3> Zound Inventory</h3>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button onClick={() => setVistaActual('inventario')} className="nav-link"> Inventario</button>
          <button onClick={() => setVistaActual('reportes')} className="nav-link"> Reportes</button>
          <button onClick={() => setVistaActual('productos')} className="nav-link"> Productos</button>
          <button onClick={() => setVistaActual('entradas')} className="nav-link"> Entradas</button>
          <button onClick={() => setVistaActual('salidas')} className="nav-link"> Salidas</button>
        </nav>
      </aside>

      
      <main className="main-content" style={{ flex: 1, padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2>Panel de control</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span>H⌁rvic®</span>
            <button onClick={onLogout} className="btn-logout" style={{ background: '#333', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '20px', cursor: 'pointer' }}>
              Cerrar sesión
            </button>
          </div>
        </header>

        <section>
          <h3>Hola, Usuario X</h3>
          <p style={{ color: '#888' }}>Inventario</p>
          
          
          <div className="cards-grid" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <div className="action-card" onClick={() => setVistaActual('inventario')}>
              <div className="icon"></div>
              <span>Ver inventario</span>
            </div>
            <div className="action-card">
              <div className="icon"></div>
              <span>Modificar inventario</span>
            </div>
            <div className="action-card">
              <div className="icon"></div>
              <span>Descargar inventario</span>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}