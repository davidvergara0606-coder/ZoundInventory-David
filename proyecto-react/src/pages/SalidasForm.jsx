import React from 'react';

export default function SalidasForm({ backToDashboard }) {
  const rolUsuario = localStorage.getItem("id_rol");

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>

      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#222', padding: '35px', borderRadius: '15px', border: '1px solid #333' }}>
        <h2 style={{ marginBottom: '5px', fontWeight: 'bold' }}>Salidas</h2>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '25px' }}>Registrar salida o venta de producto del inventario</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#aaa' }}>Código de barra</label>
            <input type="text" style={{ width: '100%', padding: '12px', backgroundColor: '#333', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box', outline: 'none' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#aaa' }}>Nombre</label>
            <input type="text" style={{ width: '100%', padding: '12px', backgroundColor: '#333', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box', outline: 'none' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#aaa' }}>Cantidad de salida</label>
            <input type="number" style={{ width: '100%', padding: '12px', backgroundColor: '#333', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box', outline: 'none' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#aaa' }}>Precio total de venta</label>
            <input type="text" style={{ width: '100%', padding: '12px', backgroundColor: '#333', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box', outline: 'none' }} />
          </div>

          <button style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '12px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px', transition: '0.2s' }}>
            Registrar salida
          </button>
        </div>
      </div>
    </div>
  );
}