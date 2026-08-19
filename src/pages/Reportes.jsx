import React, { useState, useEffect } from 'react';

export default function Reportes({ backToDashboard }) {
  const [subTipoReporte, setSubTipoReporte] = useState('stock');
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setProductos(data);
      })
      .catch(err => console.error("Error cargando reportes:", err));
  }, []);

  const productosFiltrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleDescargar = (nombreProd) => {
    alert(`Descargando reporte en PDF/Excel para: ${nombreProd}`);
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>

      <h2 style={{ marginBottom: '20px', fontWeight: 'bold', letterSpacing: '1px' }}>Reportes del Sistema</h2>
      
      <div style={{ display: 'flex', gap: '15px', margin: '20px 0', alignItems: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setSubTipoReporte('stock')} style={{ padding: '10px 20px', borderRadius: '20px', border: 'none', backgroundColor: subTipoReporte === 'stock' ? '#fff' : '#333', color: subTipoReporte === 'stock' ? '#000' : '#fff', cursor: 'pointer', fontWeight: 'bold' }}>
          Reporte General Stock
        </button>
        
        <input 
          type="text" 
          placeholder="🔍 Buscar en reporte..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', marginLeft: 'auto', outline: 'none' }} 
        />
      </div>

      <div style={{ backgroundColor: '#222', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#2d2d2d', color: '#ccc', borderBottom: '1px solid #444' }}>
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>Nombre</th>
              <th style={{ padding: '15px' }}>Categoría ID</th>
              <th style={{ padding: '15px' }}>Stock Actual</th>
              <th style={{ padding: '15px' }}>Stock Mínimo</th>
              <th style={{ padding: '15px', textAlign: 'center' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px', color: '#777' }}>No hay registros para mostrar.</td>
              </tr>
            ) : (
              productosFiltrados.map((item) => (
                <tr key={item.id_producto} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '15px', color: '#aaa' }}>{item.id_producto}</td>
                  <td style={{ padding: '15px', fontWeight: '500' }}>{item.nombre}</td>
                  <td style={{ padding: '15px', color: '#ccc' }}>{item.id_categoria}</td>
                  <td style={{ padding: '15px' }}>{item.stock_actual} U</td>
                  <td style={{ padding: '15px', color: '#888' }}>{item.stock_minimo} U</td>
                  <td style={{ padding: '15px', textAlign: 'center' }}>
                    <button 
                      onClick={() => handleDescargar(item.nombre)}
                      style={{ background: '#333', color: '#fff', border: '1px solid #444', padding: '5px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}
                    >
                       Descargar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}