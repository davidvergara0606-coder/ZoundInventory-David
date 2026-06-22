import React, { useState } from 'react';

export default function InventarioCRUD({ backToDashboard }) {
  const [vistaInterna, setVistaInterna] = useState('tabla'); 
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const [productos, setProductos] = useState([
    { codigo: 'P001', nombre: 'Audífonos', categoria: 'Periférico', stock: '150 U', precio: '$ XXX.XXX' },
    { codigo: 'P002', nombre: 'Parlante', categoria: 'Bocina', stock: '120 U', precio: '$ XXX.XXX' },
    { codigo: 'P003', nombre: 'Manos libres', categoria: 'Periférico', stock: '250 U', precio: '$ XXX.XXX' },
  ]);

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <button onClick={backToDashboard} style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      {vistaInterna === 'tabla' && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Inventario</h2>
            <input type="text" placeholder=" Buscar" style={{ padding: '10px 20px', borderRadius: '20px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', width: '300px' }} />
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#222', borderRadius: '10px', overflow: 'hidden', marginBottom: '30px' }}>
            <thead>
              <tr style={{ backgroundColor: '#2d2d2d', textAlign: 'left' }}>
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
                  <td style={{ padding: '15px' }}>{prod.codigo}</td>
                  <td style={{ padding: '15px' }}>{prod.nombre}</td>
                  <td style={{ padding: '15px' }}>{prod.categoria}</td>
                  <td style={{ padding: '15px' }}>{prod.stock}</td>
                  <td style={{ padding: '15px' }}>{prod.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>

          
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => setVistaInterna('registrar')} style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
              Registrar producto
            </button>
            <button onClick={() => { setVistaInterna('editar'); setProductoSeleccionado(productos[1]); }} style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
              Editar
            </button>
            <button onClick={() => setVistaInterna('eliminar')} style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
              Eliminar
            </button>
          </div>
        </>
      )}

      
      {vistaInterna === 'registrar' && (
        <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#222', padding: '30px', borderRadius: '15px' }}>
          <h2 style={{ marginBottom: '20px' }}>Registrar Producto</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <label>Código</label>
            <input type="text" className="input-field" style={{ padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
            <label>Nombre</label>
            <input type="text" className="input-field" style={{ padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
            <label>Categoría</label>
            <input type="text" className="input-field" style={{ padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
            <label>Precio</label>
            <input type="text" className="input-field" style={{ padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
            <button onClick={() => setVistaInterna('tabla')} style={{ backgroundColor: '#444', color: '#fff', border: 'none', padding: '12px', borderRadius: '20px', cursor: 'pointer', marginTop: '10px' }}>
              Registrar
            </button>
          </div>
        </div>
      )}

      
      {vistaInterna === 'editar' && (
        <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#222', padding: '30px', borderRadius: '15px' }}>
          <h2 style={{ marginBottom: '20px' }}>Editar Producto</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <label>Código</label>
            <input type="text" defaultValue={productoSeleccionado?.codigo} disabled style={{ padding: '10px', backgroundColor: '#444', border: 'none', borderRadius: '5px', color: '#888' }} />
            <label>Nombre</label>
            <input type="text" defaultValue={productoSeleccionado?.nombre} style={{ padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
            <label>Categoría</label>
            <input type="text" defaultValue={productoSeleccionado?.categoria} style={{ padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
            <label>Precio</label>
            <input type="text" defaultValue={productoSeleccionado?.precio} style={{ padding: '10px', backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
            <button onClick={() => setVistaInterna('tabla')} style={{ backgroundColor: '#444', color: '#fff', border: 'none', padding: '12px', borderRadius: '20px', cursor: 'pointer', marginTop: '10px' }}>
              Guardar Cambios
            </button>
          </div>
        </div>
      )}

      
      {vistaInterna === 'eliminar' && (
        <>
          <h2 style={{ marginBottom: '20px' }}>Eliminar Producto</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#222', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#2d2d2d', textAlign: 'left' }}>
                <th style={{ padding: '15px' }}>Seleccionar</th>
                <th style={{ padding: '15px' }}>Código</th>
                <th style={{ padding: '15px' }}>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((prod) => (
                <tr key={prod.codigo} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '15px', textAlign: 'center' }}>
                    <input type="checkbox" defaultChecked={prod.codigo === 'P002'} style={{ transform: 'scale(1.2)' }} />
                  </td>
                  <td style={{ padding: '15px' }}>{prod.codigo}</td>
                  <td style={{ padding: '15px' }}>{prod.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => setVistaInterna('tabla')} style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
            Eliminar seleccionados
          </button>
        </>
      )}
    </div>
  );
}