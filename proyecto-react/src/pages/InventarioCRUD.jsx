import React, { useState } from 'react';

export default function InventarioCRUD({ backToDashboard }) {
  const [vistaInterna, setVistaInterna] = useState('tabla'); 
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  
  const rolUsuario = localStorage.getItem("id_rol");

  const [productos, setProductos] = useState([
    { codigo: 'P001', nombre: 'Audífonos', categoria: 'Periférico', stock: '150 U', precio: '$ XXX.XXX' },
    { codigo: 'P002', nombre: 'Parlante', categoria: 'Bocina', stock: '120 U', precio: '$ XXX.XXX' },
    { codigo: 'P003', nombre: 'Manos libres', categoria: 'Periférico', stock: '250 U', precio: '$ XXX.XXX' },
  ]);

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>

      {vistaInterna === 'tabla' && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
            <h2 style={{ margin: 0, fontWeight: 'bold', letterSpacing: '1px' }}>Inventario General</h2>
            <input 
              type="text" 
              placeholder="🔍 Buscar producto..." 
              style={{ padding: '10px 20px', borderRadius: '20px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', width: '280px', outline: 'none' }} 
            />
          </div>

          <div style={{ backgroundColor: '#222', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333', marginBottom: '25px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#2d2d2d', color: '#ccc', borderBottom: '1px solid #444' }}>
                  <th style={{ padding: '15px' }}>Código</th>
                  <th style={{ padding: '15px' }}>Nombre</th>
                  <th style={{ padding: '15px' }}>Categoría</th>
                  <th style={{ padding: '15px' }}>Stock</th>
                  <th style={{ padding: '15px' }}>Precio</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {rolUsuario === "admin" && (
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button onClick={() => setVistaInterna('registrar')} style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #444', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
                + Registrar producto
              </button>
              <button onClick={() => { setVistaInterna('editar'); setProductoSeleccionado(productos[1]); }} style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #444', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
                ✏️ Editar
              </button>
              <button onClick={() => setVistaInterna('eliminar')} style={{ backgroundColor: '#5c1d1d', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
                🗑️ Eliminar
              </button>
            </div>
          )}
        </>
      )}

      {rolUsuario === "admin" && vistaInterna === 'registrar' && (
        <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#222', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
          <h2 style={{ marginBottom: '20px' }}>Registrar Producto</h2>
          <button onClick={() => setVistaInterna('tabla')} style={{ backgroundColor: '#444', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '20px', cursor: 'pointer', marginTop: '10px' }}>
            Guardar y volver
          </button>
        </div>
      )}

      {rolUsuario !== "admin" && vistaInterna !== 'tabla' && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h3>Acceso Restringido</h3>
          <p style={{ color: '#888' }}>No tienes permisos de administrador para realizar modificaciones.</p>
        </div>
      )}
    </div>
  );
}