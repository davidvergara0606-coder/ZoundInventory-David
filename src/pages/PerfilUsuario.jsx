import React, { useState, useEffect } from 'react';

export default function MiPerfil() {
  const [perfil, setPerfil] = useState({
    primer_nombre: '',
    primer_apellido: '',
    correo: '',
    documento: '',
    rolAsignado: ''
  });
  const [nuevoPassword, setNuevoPassword] = useState('');
  const [editando, setEditando] = useState(false);

  
  const idUsuario = localStorage.getItem("id_usuario");

  
  useEffect(() => {
    if (idUsuario) {
      fetch(`http://localhost:5000/auth/perfil/${idUsuario}`)
        .then(res => res.json())
        .then(data => {
          if (res.ok) {
            setPerfil({
              primer_nombre: data.primer_nombre || '',
              primer_apellido: data.primer_apellido || '',
              correo: data.correo || '',
              documento: data.documento || '',
              rolAsignado: Number(data.id_rol) === 1 ? 'Administrador' : 'Bodeguero Operativo'
            });
          } else {
            console.error(data.mensaje);
          }
        })
        .catch(err => console.error("Error de conexión:", err));
    }
  }, [idUsuario]);

  
  const handleGuardarCambios = async () => {
    try {
      
      const datosAEnviar = {
        primer_nombre: perfil.primer_nombre,
        correo: perfil.correo
      };

      
      if (nuevoPassword && nuevoPassword.trim() !== "") {
        datosAEnviar.password = nuevoPassword;
      }

      const response = await fetch(`http://localhost:5000/auth/perfil/actualizar/${idUsuario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosAEnviar)
      });

      const data = await response.json();
      if (response.ok) {
        alert("¡Perfil y contraseña actualizados con éxito!");
        setEditando(false);
        setNuevoPassword(''); 
      } else {
        alert(data.mensaje || "Error al actualizar perfil");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div style={{ padding: '30px', color: '#fff', background: '#1e1e1e', borderRadius: '12px', width: '450px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>Mi perfil</h2>
      <p style={{ color: '#888', fontSize: '13px' }}>Información de la cuenta activa en ZoundInventory</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        
        <div>
          <label style={{ fontSize: '12px', color: '#aaa' }}>Nombre de usuario</label>
          <input 
            type="text" 
            disabled={!editando}
            value={perfil.primer_nombre}
            onChange={(e) => setPerfil({...perfil, primer_nombre: e.target.value})}
            style={{ width: '100%', padding: '10px', background: editando ? '#2a2a2a' : '#222', color: '#fff', border: '1px solid #444', borderRadius: '6px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '12px', color: '#aaa' }}>Documento</label>
          <input 
            type="text" 
            disabled={true} 
            value={perfil.documento}
            style={{ width: '100%', padding: '10px', background: '#222', color: '#777', border: '1px solid #333', borderRadius: '6px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '12px', color: '#aaa' }}>Rol asignado</label>
          <input 
            type="text" 
            disabled={true}
            value={perfil.rolAsignado}
            style={{ width: '100%', padding: '10px', background: '#222', color: '#777', border: '1px solid #333', borderRadius: '6px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '12px', color: '#aaa' }}>Correo electrónico</label>
          <input 
            type="email" 
            disabled={!editando}
            value={perfil.correo}
            onChange={(e) => setPerfil({...perfil, correo: e.target.value})}
            style={{ width: '100%', padding: '10px', background: editando ? '#2a2a2a' : '#222', color: '#fff', border: '1px solid #444', borderRadius: '6px', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </div>

        {editando && (
          <div>
            <label style={{ fontSize: '12px', color: '#aaa' }}>Nueva contraseña (Opcional)</label>
            <input 
              type="password" 
              placeholder="Escribe una nueva contraseña si deseas cambiarla"
              value={nuevoPassword}
              onChange={(e) => setNuevoPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', background: '#2a2a2a', color: '#fff', border: '1px solid #444', borderRadius: '6px', marginTop: '5px', boxSizing: 'border-box' }}
            />
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          {editando ? (
            <>
              <button onClick={handleGuardarCambios} style={{ flex: 1, padding: '10px', background: '#fff', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                Guardar Cambios
              </button>
              <button onClick={() => setEditando(false)} style={{ padding: '10px', background: '#444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                Cancelar
              </button>
            </>
          ) : (
            <button onClick={() => setEditando(true)} style={{ width: '100%', padding: '10px', background: '#fff', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Editar campos
            </button>
          )}
        </div>

      </div>
    </div>
  );
}