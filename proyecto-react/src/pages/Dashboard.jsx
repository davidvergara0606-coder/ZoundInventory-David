import React from 'react';

export default function Dashboard({ onLogout, onNavigate }) {
  const rolUsuario = localStorage.getItem("id_rol");
  const usuarioActual = localStorage.getItem("usuario") || "Administrador";

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ margin: 0, fontWeight: 'bold', letterSpacing: '1px' }}>Panel de control (Administrador)</h2>
          <p style={{ color: '#888', margin: '5px 0 0 0', fontSize: '14px' }}>Gestión central de ZoundInventory - Harvic</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '14px', color: '#aaa' }}>H⌁rvic®</span>
        </div>
      </header>

      <section>
        <h3 style={{ fontWeight: 'normal', color: '#ccc' }}>Hola, <strong style={{ color: '#fff' }}>{usuarioActual}</strong></h3>
        <p style={{ color: '#888', fontSize: '14px' }}>Acceso completo al inventario y funciones administrativas</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '25px' }}>
          
          <div 
            onClick={() => onNavigate('inventario')}
            style={{ backgroundColor: '#222', border: '1px solid #333', padding: '25px', borderRadius: '12px', cursor: 'pointer', transition: '0.2s' }}
          >
            <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>Ver Inventario</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Revisa la tabla general de productos.</p>
          </div>

          <div 
            onClick={() => onNavigate('inventario')}
            style={{ backgroundColor: '#222', border: '1px solid #333', padding: '25px', borderRadius: '12px', cursor: 'pointer', transition: '0.2s' }}
          >
            <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>Modificar Inventario</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Gestión CRUD de entradas y salidas.</p>
          </div>

          <div 
            onClick={() => onNavigate('reportes')}
            style={{ backgroundColor: '#222', border: '1px solid #333', padding: '25px', borderRadius: '12px', cursor: 'pointer', transition: '0.2s' }}
          >
            <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>Reportes de Stock</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Descarga informes de existencias.</p>
          </div>

          <div 
            onClick={() => onNavigate('crear-usuario')}
            style={{ backgroundColor: '#222', border: '1px solid #4da6ff', padding: '25px', borderRadius: '12px', cursor: 'pointer', transition: '0.2s' }}
          >
            <h4 style={{ margin: '0 0 8px 0', color: '#4da6ff' }}>Crear Usuario</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Da de alta a nuevos bodegueros o admins.</p>
          </div>

        </div>
      </section>
    </div>
  );
}