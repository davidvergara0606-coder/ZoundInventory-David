import React from 'react';

export default function DashboardBodega({ onNavigate }) {
  const usuarioActual = localStorage.getItem("usuario") || "Bodeguero";

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ margin: 0, fontWeight: 'bold', letterSpacing: '1px' }}>Panel de Bodega</h2>
          <p style={{ color: '#888', margin: '5px 0 0 0', fontSize: '14px' }}>ZoundInventory - Harvic</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '14px', color: '#aaa' }}>H⌁rvic®</span>
        </div>
      </header>

      <section>
        <h3 style={{ fontWeight: 'normal', color: '#ccc' }}>Hola, <strong style={{ color: '#fff' }}>{usuarioActual}</strong></h3>
        <p style={{ color: '#888', fontSize: '14px' }}>Control operativo de entradas y salidas de mercancía</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '25px' }}>
          
          <div 
            onClick={() => onNavigate('entradas')}
            style={{ backgroundColor: '#222', border: '1px solid #333', padding: '25px', borderRadius: '12px', cursor: 'pointer' }}
          >
            <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>Registrar Entradas</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Añade nuevo stock recibido a bodega.</p>
          </div>

          <div 
            onClick={() => onNavigate('salidas')}
            style={{ backgroundColor: '#222', border: '1px solid #333', padding: '25px', borderRadius: '12px', cursor: 'pointer' }}
          >
            <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>Registrar Salidas</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Despacha productos hacia clientes/tiendas.</p>
          </div>

          <div 
            onClick={() => onNavigate('inventario')}
            style={{ backgroundColor: '#222', border: '1px solid #333', padding: '25px', borderRadius: '12px', cursor: 'pointer' }}
          >
            <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>Consultar Inventario</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Visualiza existencias actuales en tiempo real.</p>
          </div>

        </div>
      </section>
    </div>
  );
}