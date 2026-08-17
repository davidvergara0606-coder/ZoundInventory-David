import React from 'react';

export default function PerfilUsuario({ backToDashboard }) {
  const usuarioActual = localStorage.getItem("usuario") || "Usuario X";
  const rolUsuario = localStorage.getItem("id_rol") || "admin";

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>

      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#222', padding: '35px', borderRadius: '15px', position: 'relative', border: '1px solid #333' }}>
        
        <button 
          onClick={backToDashboard}
          style={{ position: 'absolute', top: '20px', right: '20px', background: '#333', color: '#fff', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          ✕
        </button>

        <h2 style={{ marginBottom: '5px', fontWeight: 'bold' }}>Mi perfil</h2>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '25px' }}>Información de la cuenta activa en ZoundInventory</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#aaa' }}>Nombre de usuario</label>
            <div style={{ padding: '12px', backgroundColor: '#333', borderRadius: '8px', border: '1px solid #444', color: '#fff' }}>
              {usuarioActual}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#aaa' }}>Rol asignado</label>
            <div style={{ padding: '12px', backgroundColor: '#333', borderRadius: '8px', border: '1px solid #444', color: '#fff', textTransform: 'capitalize' }}>
              {rolUsuario === 'admin' ? 'Administrador / Gestor' : 'Bodeguero Operativo'}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#aaa' }}>Correo electrónico</label>
            <div style={{ padding: '12px', backgroundColor: '#333', borderRadius: '8px', border: '1px solid #444', color: '#fff' }}>
              {usuarioActual}@harvic.com
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button style={{ flex: 1, backgroundColor: '#333', color: '#fff', border: '1px solid #444', padding: '12px', borderRadius: '20px', cursor: 'pointer' }}>
              Cambiar contraseña
            </button>
            <button style={{ flex: 1, backgroundColor: '#fff', color: '#000', border: 'none', padding: '12px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
              Editar campos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}