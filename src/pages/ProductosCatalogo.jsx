import React, { useState, useEffect } from 'react';

export default function CRUDProductos() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [stockActual, setStockActual] = useState('');
  const [stockMinimo, setStockMinimo] = useState('');
  const [idCategoria, setIdCategoria] = useState('');
  
  const [editandoId, setEditandoId] = useState(null);

 
  const cargarProductos = async () => {
    try {
      const response = await fetch('http://localhost:5000/productos');
      const data = await response.json();
      if (response.ok) {
        setProductos(data);
      }
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const productoData = {
      nombre,
      stock_actual: parseInt(stockActual),
      stock_minimo: parseInt(stockMinimo),
      id_categoria: parseInt(idCategoria)
    };

    const url = editandoId 
      ? `http://localhost:5000/productos/${editandoId}` 
      : 'http://localhost:5000/productos';
    
    const method = editandoId ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productoData)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.mensaje);
        limpiarFormulario();
        cargarProductos();
      } else {
        alert(data.mensaje || "Error al procesar la solicitud");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  
  const prepararEdicion = (prod) => {
    setEditandoId(prod.id_producto);
    setNombre(prod.nombre);
    setStockActual(prod.stock_actual);
    setStockMinimo(prod.stock_minimo);
    setIdCategoria(prod.id_categoria);
  };

  
  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;

    try {
      const response = await fetch(`http://localhost:5000/productos/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(data.mensaje);
        cargarProductos(); 
      } else {
        alert(data.mensaje || "No se pudo eliminar");
      }
    } catch (error) {
      console.error("Error de red al eliminar:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  const limpiarFormulario = () => {
    setEditandoId(null);
    setNombre('');
    setStockActual('');
    setStockMinimo('');
    setIdCategoria('');
  };

  return (
    <div style={{ padding: '20px', color: '#fff', fontFamily: 'sans-serif', maxWidth: '900px', margin: 'auto' }}>
      <h2>Gestión de Inventario (CRUD de Productos)</h2>
      <p style={{ color: '#888', fontSize: '13px' }}>Crea, edita y administra los productos de ZoundInventory</p>

      
      <form onSubmit={handleSubmit} style={{ background: '#1e1e1e', padding: '20px', borderRadius: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px', border: '1px solid #333' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#aaa' }}>Nombre del Producto</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ width: '100%', padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '6px', boxSizing: 'border-box' }} />
        </div>

        <div>
          <label style={{ fontSize: '12px', color: '#aaa' }}>Stock Actual</label>
          <input type="number" value={stockActual} onChange={(e) => setStockActual(e.target.value)} required style={{ width: '100%', padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '6px', boxSizing: 'border-box' }} />
        </div>

        <div>
          <label style={{ fontSize: '12px', color: '#aaa' }}>Stock Mínimo</label>
          <input type="number" value={stockMinimo} onChange={(e) => setStockMinimo(e.target.value)} required style={{ width: '100%', padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '6px', boxSizing: 'border-box' }} />
        </div>

        <div>
          <label style={{ fontSize: '12px', color: '#aaa' }}>ID Categoría</label>
          <input type="number" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)} required style={{ width: '100%', padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '6px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button type="submit" style={{ flex: 1, padding: '10px', background: '#fff', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            {editandoId ? "Actualizar Producto" : "Crear Producto"}
          </button>
          {editandoId && (
            <button type="button" onClick={limpiarFormulario} style={{ padding: '10px', background: '#444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      
      <h3 style={{ marginTop: '30px' }}>Lista de Productos Registrados</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', background: '#1e1e1e', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ background: '#2a2a2a', textAlign: 'left', color: '#aaa', fontSize: '13px' }}>
            <th style={{ padding: '12px' }}>ID</th>
            <th style={{ padding: '12px' }}>Nombre</th>
            <th style={{ padding: '12px' }}>Stock</th>
            <th style={{ padding: '12px' }}>Mínimo</th>
            <th style={{ padding: '12px' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '20px', color: '#777' }}>No hay productos registrados.</td>
            </tr>
          ) : (
            productos.map((prod) => (
              <tr key={prod.id_producto} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '12px' }}>{prod.id_producto}</td>
                <td style={{ padding: '12px' }}>{prod.nombre}</td>
                <td style={{ padding: '12px' }}>{prod.stock_actual}</td>
                <td style={{ padding: '12px' }}>{prod.stock_minimo}</td>
                <td style={{ padding: '12px', display: 'flex', gap: '8px' }}>
                  <button onClick={() => prepararEdicion(prod)} style={{ padding: '6px 10px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Editar</button>
                  <button onClick={() => eliminarProducto(prod.id_producto)} style={{ padding: '6px 10px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}