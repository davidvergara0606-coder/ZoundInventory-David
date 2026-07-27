import React from 'react';

export default function AlertasStock({ backToDashboard }) {
  
  const rolUsuario = localStorage.getItem("id_rol");

  const alertas = [
    { codigo: 'P035', nombre: 'JBL Charge 5', categoria: 'Parlante', stock: '10 U' },
    { codigo: 'P022', nombre: 'Sony WF-1000XM5', categoria: 'Periférico', stock: '17 U' },
    { codigo: 'P005', nombre: 'Marshall Acton III', categoria: 'Parlante', stock: '19 U' },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <button onClick={backToDashboard} style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <h2 style={{ marginBottom: '20px' }}> Alertas de Stock</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#222', borderRadius: '10px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#2d2d2d', textAlign: 'left' }}>
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
              <td style={{ padding: '15px' }}>{item.codigo}</td>
              <td style={{ padding: '15px' }}>{item.nombre}</td>
              <td style={{ padding: '15px' }}>{item.categoria}</td>
              <td style={{ padding: '15px', color: '#ff4d4d', fontWeight: 'bold' }}>{item.stock}</td>
              
              
              {rolUsuario === "1" && (
                <td style={{ padding: '15px' }}>
                  <button style={{ background: '#444', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
                    Ajustar
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}