import React, { useState } from 'react';

export default function CrearUsuario({ backToDashboard }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('bodeguero'); 
  const [mensaje, setMensaje] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email || !password) {
      setMensaje({ tipo: 'danger', texto: 'Por favor, completa todos los campos.' });
      return;
    }

    console.log('Creando usuario:', { nombre, email, password, role });
    setMensaje({ tipo: 'success', texto: `¡Usuario ${nombre} (${role}) creado exitosamente para Harvic!` });
    
    setNombre('');
    setEmail('');
    setPassword('');
    setRole('bodeguero');
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>

      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#222', padding: '35px', borderRadius: '15px', border: '1px solid #333' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#fff', fontWeight: 'bold', letterSpacing: '1px' }}>
          Harvic - Crear Nuevo Usuario
        </h2>
        
        {mensaje && (
          <div style={{ 
            padding: '12px', 
            borderRadius: '8px', 
            marginBottom: '20px', 
            backgroundColor: mensaje.tipo === 'success' ? '#1e4620' : '#5c1d1d',
            color: '#fff',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {mensaje.texto}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#aaa' }}>Nombre Completo</label>
            <input 
              type="text" 
              placeholder="Ej. Carlos Pérez" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#333', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#aaa' }}>Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="usuario@harvic.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#333', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#aaa' }}>Contraseña Temporal</label>
            <input 
              type="password" 
              placeholder="Contraseña segura" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#333', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#aaa' }}>Asignar Rol</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#333', color: '#fff', boxSizing: 'border-box' }}
            >
              <option value="bodeguero">Bodeguero</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <button type="submit" style={{ padding: '12px', borderRadius: '20px', border: 'none', backgroundColor: '#fff', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}>
              Registrar Usuario
            </button>
            <button type="button" onClick={backToDashboard} style={{ padding: '12px', borderRadius: '20px', border: 'none', backgroundColor: '#444', color: '#fff', cursor: 'pointer' }}>
              Volver al Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}