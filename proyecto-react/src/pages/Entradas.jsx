import React from 'react';

export default function AlertasStock({ backToDashboard }) {
  const rolUsuario = localStorage.getItem("id_rol");

  const alertas = [
    { codigo: 'P035', nombre: 'JBL Charge 5', categoria: 'Parlante', stock: '10 U' },
    { codigo: 'P022', nombre: 'Sony WF-1000XM5', categoria: 'Periférico', stock: '17 U' },
    { codigo: 'P005', nombre: 'Marshall Acton III', categoria: 'Parlante', stock: '19 U' },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>

      <h2 style={{ marginBottom: '20px', fontWeight: 'bold', letterSpacing: '1px' }}>Alertas de Stock</h2>

      <div style={{ backgroundColor: '#222', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#2d2d2d', color: '#ccc', borderBottom: '1px solid #444' }}>
              <th style={{ padding: '15px' }}>Código</th>
              <th style={{ padding: '15px' }}>Nombre</th>
              <th style={{ padding: '15px' }}>Categoría</th>
              <th style={{ padding: '15px' }}>Stock</th>
              {rolUsuario === "1" && <th style={{ padding: '15px' }}>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {alertas.map((item) => (
              <tr key={item.codigo} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '15px', color: '#aaa' }}>{item.codigo}</td>
                <td style={{ padding: '15px', fontWeight: '500' }}>{item.nombre}</td>
                <td style={{ padding: '15px', color: '#ccc' }}>{item.categoria}</td>
                <td style={{ padding: '15px', color: '#ff4d4d', fontWeight: 'bold' }}>{item.stock}</td>
                
                {rolUsuario === "1" && (
                  <td style={{ padding: '15px' }}>
                    <button style={{ background: '#333', color: '#fff', border: '1px solid #444', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}>
                      Ajustar
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}