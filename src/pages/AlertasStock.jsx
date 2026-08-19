import React, { useState, useEffect } from 'react';

export default function AlertasStock({ backToDashboard }) {
  const rolUsuario = localStorage.getItem("id_rol");
  const [alertas, setAlertas] = useState([]);

  const cargarAlertas = async () => {
    try {
      const response = await fetch('http://localhost:5000/productos');
      const data = await response.json();
      if (response.ok) {
        // Filtrar solo los productos cuyo stock actual sea menor o igual al stock mínimo
        const stockCritico = data.filter(prod => prod.stock_actual <= prod.stock_minimo);
        setAlertas(stockCritico);
      }
    } catch (error) {
      console.error("Error al cargar alertas:", error);
    }
  };

  useEffect(() => {
    cargarAlertas();
  }, []);

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
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>Nombre</th>
              <th style={{ padding: '15px' }}>Categoría ID</th>
              <th style={{ padding: '15px' }}>Stock Actual</th>
              <th style={{ padding: '15px' }}>Stock Mínimo</th>
              {rolUsuario === "1" && <th style={{ padding: '15px' }}>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {alertas.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px', color: '#777' }}>No hay alertas de stock crítico. ¡Todo en orden!</td>
              </tr>
            ) : (
              alertas.map((item) => (
                <tr key={item.id_producto} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '15px', color: '#aaa' }}>{item.id_producto}</td>
                  <td style={{ padding: '15px', fontWeight: '500' }}>{item.nombre}</td>
                  <td style={{ padding: '15px', color: '#ccc' }}>{item.id_categoria}</td>
                  <td style={{ padding: '15px', color: '#ff4d4d', fontWeight: 'bold' }}>{item.stock_actual} U</td>
                  <td style={{ padding: '15px', color: '#888' }}>{item.stock_minimo} U</td>
                  
                  {rolUsuario === "1" && (
                    <td style={{ padding: '15px' }}>
                      <button 
                        onClick={() => alert(`Ajustar stock para el producto: ${item.nombre}`)}
                        style={{ background: '#333', color: '#fff', border: '1px solid #444', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}
                      >
                        Ajustar
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