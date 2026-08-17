import React from 'react';

export default function InventarioTabla({ backToDashboard }) {
  const rolUsuario = localStorage.getItem("id_rol");
  
  const productos = [
    { codigo: 'P001', nombre: 'Audífonos', categoria: 'Periférico', stock: '150 U', precio: '$ XXX.XXX' },
    { codigo: 'P002', nombre: 'Parlante', categoria: 'Bocina', stock: '120 U', precio: '$ XXX.XXX' },
    { codigo: 'P003', nombre: 'Manos libres', categoria: 'Periférico', stock: '250 U', precio: '$ XXX.XXX' },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        <h2 style={{ margin: 0, fontWeight: 'bold', letterSpacing: '1px' }}>Inventario</h2>
        <input 
          type="text" 
          placeholder="🔍 Buscar..." 
          style={{ padding: '10px 20px', borderRadius: '20px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', width: '280px', outline: 'none' }} 
        />
      </div>

      <div style={{ backgroundColor: '#222', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#2d2d2d', color: '#ccc', borderBottom: '1px solid #444' }}>
              <th style={{ padding: '15px' }}>Código</th>
              <th style={{ padding: '15px' }}>Nombre</th>
              <th style={{ padding: '15px' }}>Categoría</th>
              <th style={{ padding: '15px' }}>Stock</th>
              <th style={{ padding: '15px' }}>Precio</th>
              {rolUsuario === "1" && <th style={{ padding: '15px' }}>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {productos.map((prod) => (
              <tr key={prod.codigo} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '15px', color: '#aaa' }}>{prod.codigo}</td>
                <td style={{ padding: '15px', fontWeight: '500' }}>{prod.nombre}</td>
                <td style={{ padding: '15px', color: '#ccc' }}>{prod.categoria}</td>
                <td style={{ padding: '15px' }}>{prod.stock}</td>
                <td style={{ padding: '15px', color: '#00d1b2' }}>{prod.precio}</td>
                
                {rolUsuario === "1" && (
                  <td style={{ padding: '15px' }}>
                    <button style={{ marginRight: '10px', background: 'none', color: '#00d1b2', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Edit</button>
                    <button style={{ background: 'none', color: '#ff4d4d', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Del</button>
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