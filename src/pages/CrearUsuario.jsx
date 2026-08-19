import React, { useState } from 'react';

export default function RegistrarUsuarioAdmin() {
  const [formData, setFormData] = useState({
    primer_nombre: '',
    primer_apellido: '',
    tipo_documento: 'CC',
    documento: '',
    correo: '',
    password: '',
    id_rol: '2' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/crear-usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        alert("¡Usuario registrado con éxito!");
        
        setFormData({
          primer_nombre: '', primer_apellido: '', tipo_documento: 'CC',
          documento: '', correo: '', password: '', id_rol: '2'
        });
      } else {
        alert(data.mensaje || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div style={{ padding: '20px', color: '#fff', background: '#1e1e1e', borderRadius: '8px', width: '400px', margin: '20px auto' }}>
      <h3>Registrar Nuevo Empleado / Bodeguero</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" name="primer_nombre" placeholder="Primer Nombre" value={formData.primer_nombre} onChange={handleChange} required style={{ padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '5px' }} />
        <input type="text" name="primer_apellido" placeholder="Primer Apellido" value={formData.primer_apellido} onChange={handleChange} required style={{ padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '5px' }} />
        
        <select name="tipo_documento" value={formData.tipo_documento} onChange={handleChange} style={{ padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '5px' }}>
          <option value="CC">Cédula de Ciudadanía</option>
          <option value="CE">Cédula de Extranjería</option>
          <option value="NIT">NIT</option>
        </select>

        <input type="text" name="documento" placeholder="Número de Documento" value={formData.documento} onChange={handleChange} required style={{ padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '5px' }} />
        <input type="email" name="correo" placeholder="Correo Electrónico" value={formData.correo} onChange={handleChange} required style={{ padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '5px' }} />
        <input type="password" name="password" placeholder="Contraseña Provisional" value={formData.password} onChange={handleChange} required style={{ padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '5px' }} />
        
        <label style={{ fontSize: '12px', color: '#aaa' }}>Rol del Usuario:</label>
        <select name="id_rol" value={formData.id_rol} onChange={handleChange} style={{ padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '5px' }}>
          <option value="2">Bodeguero</option>
          <option value="1">Administrador</option>
        </select>

        <button type="submit" style={{ padding: '12px', background: '#fff', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
          Crear Usuario
        </button>
      </form>
    </div>
  );
}