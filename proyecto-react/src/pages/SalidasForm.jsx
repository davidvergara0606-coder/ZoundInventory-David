import React from 'react';

export default function SalidasForm({ backToDashboard }) {

  const rolUsuario = localStorage.getItem("id_rol");

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <button onClick={backToDashboard} style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#222', padding: '30px', borderRadius: '15px' }}>
        <h2 style={{ marginBottom: '5px' }}>Salidas</h2>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '25px' }}>Registrar salida o venta de producto del inventario</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Código de barra</label>
            <input type="text" style={{ width: '100%', padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Nombre</label>
            <input type="text" style={{ width: '100%', padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Cantidad de salida</label>
            <input type="number" style={{ width: '100%', padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Precio total de venta</label>
            <input type="text" style={{ width: '100%', padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
          </div>

          <button style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '12px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
            Registrar salida
          </button>
        </div>
      </div>
    </div>
  );
}