import React, { useState, useEffect } from 'react';

export default function InventarioCRUD({ backToDashboard }) {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const rolUsuario = localStorage.getItem("id_rol");

  const cargarProductos = async () => {
    try {
      const res = await fetch('http://localhost:5000/productos');
      const data = await res.json();
      if (res.ok) setProductos(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;
    try {
      const res = await fetch(`http://localhost:5000/productos/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (res.ok) {
        alert(data.mensaje);
        cargarProductos();
      } else {
        alert(data.mensaje || "Error al eliminar");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const productosFiltrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        <h2 style={{ margin: 0, fontWeight: 'bold', letterSpacing: '1px' }}>Gestión de Inventario</h2>
        <input 
          type="text" 
          placeholder=" Buscar producto..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: '10px 20px', borderRadius: '20px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', width: '280px', outline: 'none' }} 
        />
      </div>

      <div style={{ backgroundColor: '#222', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333', marginBottom: '25px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#2d2d2d', color: '#ccc', borderBottom: '1px solid #444' }}>
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>Nombre</th>
              <th style={{ padding: '15px' }}>Categoría</th>
              <th style={{ padding: '15px' }}>Stock</th>
              <th style={{ padding: '15px' }}>Mínimo</th>
              {rolUsuario === "1" && <th style={{ padding: '15px' }}>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px', color: '#777' }}>No hay productos registrados.</td>
              </tr>
            ) : (
              productosFiltrados.map((prod) => (
                <tr key={prod.id_producto} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '15px', color: '#aaa' }}>{prod.id_producto}</td>
                  <td style={{ padding: '15px', fontWeight: '500' }}>{prod.nombre}</td>
                  <td style={{ padding: '15px', color: '#ccc' }}>{prod.id_categoria}</td>
                  <td style={{ padding: '15px' }}>{prod.stock_actual} U</td>
                  <td style={{ padding: '15px', color: '#888' }}>{prod.stock_minimo} U</td>
                  {rolUsuario === "1" && (
                    <td style={{ padding: '15px' }}>
                      <button 
                        onClick={() => eliminarProducto(prod.id_producto)} 
                        style={{ backgroundColor: '#5c1d1d', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}
                      >
                        Eliminar
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}