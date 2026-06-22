import React from 'react';

export default function PerfilUsuario({ backToDashboard }) {
  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <button onClick={backToDashboard} style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#222', padding: '30px', borderRadius: '15px', position: 'relative' }}>
        
        {/* Botón de cierre o retroceso superior derecho como el de tus diagramas */}
        <button 
          onClick={backToDashboard}
          style={{ position: 'absolute', top: '20px', right: '20px', background: '#333', color: '#fff', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          ✕
        </button>

        <h2 style={{ marginBottom: '5px' }}>Mi perfil</h2>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '25px' }}>Información de la cuenta activa en ZoundInventory</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#aaa' }}>Nombre completo</label>
            <div style={{ padding: '12px', backgroundColor: '#333', borderRadius: '8px', border: '1px solid #444' }}>
              Usuario X
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#aaa' }}>Rol asignado</label>
            <div style={{ padding: '12px', backgroundColor: '#333', borderRadius: '8px', border: '1px solid #444' }}>
              Administrador / Gestor de Inventario
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#aaa' }}>Correo electrónico</label>
            <div style={{ padding: '12px', backgroundColor: '#333', borderRadius: '8px', border: '1px solid #444' }}>
              usuario_x@harvic.com
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button style={{ flex: 1, backgroundColor: '#444', color: '#fff', border: 'none', padding: '12px', borderRadius: '20px', cursor: 'pointer' }}>
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