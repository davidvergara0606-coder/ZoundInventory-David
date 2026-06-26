import React, { useState } from 'react';

export default function Reportes({ backToDashboard }) {

  const rolUsuario = localStorage.getItem("id_rol");

  const [subTipoReporte, setSubTipoReporte] = useState('stock');
  

  const datosReporte = {
    stock: [
      { codigo: 'P001', nombre: 'Audífonos', categoria: 'Periférico', stock: '150 U' },
      { codigo: 'P002', nombre: 'Parlante', categoria: 'Bocina', stock: '120 U' },
    ],
    devoluciones: [
      { codigo: 'P005', nombre: 'Audífonos', categoria: 'Periférico', observacion: 'Falla en auricular izquierdo' },
      { codigo: 'P002', nombre: 'Parlante', categoria: 'Bocina', observacion: 'Caja golpeada en transporte' },
    ],
    garantia: [
      { codigo: 'P012', nombre: 'Manos libres', categoria: 'Periférico', observacion: 'Garantía de fábrica activa' }
    ]
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <button onClick={backToDashboard} style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <h2>Reportes</h2>
      
      
      <div style={{ display: 'flex', gap: '15px', margin: '20px 0', alignItems: 'center' }}>
        <button onClick={() => setSubTipoReporte('stock')} style={{ padding: '10px 20px', borderRadius: '20px', border: 'none', backgroundColor: subTipoReporte === 'stock' ? '#fff' : '#333', color: subTipoReporte === 'stock' ? '#000' : '#fff', cursor: 'pointer' }}>
          Reporte Stock
        </button>
        <button onClick={() => setSubTipoReporte('devoluciones')} style={{ padding: '10px 20px', borderRadius: '20px', border: 'none', backgroundColor: subTipoReporte === 'devoluciones' ? '#fff' : '#333', color: subTipoReporte === 'devoluciones' ? '#000' : '#fff', cursor: 'pointer' }}>
          Reporte Devoluciones
        </button>
        <button onClick={() => setSubTipoReporte('garantia')} style={{ padding: '10px 20px', borderRadius: '20px', border: 'none', backgroundColor: subTipoReporte === 'garantia' ? '#fff' : '#333', color: subTipoReporte === 'garantia' ? '#000' : '#fff', cursor: 'pointer' }}>
          Reporte Garantía
        </button>
        
        <input type="text" placeholder=" Buscar" style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', marginLeft: 'auto' }} />
      </div>

      
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#222', borderRadius: '10px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#2d2d2d', textAlign: 'left' }}>
            <th style={{ padding: '15px' }}>Código</th>
            <th style={{ padding: '15px' }}>Nombre</th>
            <th style={{ padding: '15px' }}>Categoría</th>
            {subTipoReporte === 'stock' ? <th style={{ padding: '15px' }}>Stock</th> : <th style={{ padding: '15px' }}>Observación</th>}
            <th style={{ padding: '15px', textAlign: 'center' }}>Descargar</th>
          </tr>
        </thead>
        <tbody>
          {datosReporte[subTipoReporte].map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '15px' }}>{item.codigo}</td>
              <td style={{ padding: '15px' }}>{item.nombre}</td>
              <td style={{ padding: '15px' }}>{item.categoria}</td>
              <td style={{ padding: '15px' }}>{subTipoReporte === 'stock' ? item.stock : item.observacion}</td>
              <td style={{ padding: '15px', textAlign: 'center', cursor: 'pointer' }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}