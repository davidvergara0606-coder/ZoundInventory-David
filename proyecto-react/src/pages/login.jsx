import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="login-container" style={{ backgroundColor: '#121212', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="login-card" style={{ textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontWeight: 'bold', letterSpacing: '2px' }}>Hervic</h1>
        <p style={{ opacity: 0.7, fontSize: '14px' }}> Zound Inventory</p>

        <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Usuario" className="input-field" />
          
          {isRegistering && (
            <input type="text" placeholder="Rol" className="input-field" />
          )}
          
          <input type="password" placeholder="Contraseña" className="input-field" />

          {!isRegistering ? (
            <>
              <span 
                onClick={() => setIsRegistering(true)} 
                style={{ color: '#aaa', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline' }}
              >
                Añadir nuevo usuario
              </span>
              <button type="button" onClick={onLogin} className="btn-primary">Iniciar sesión</button>
            </>
          ) : (
            <>
              <button type="button" className="btn-primary">Registrar</button>
              <span 
                onClick={() => setIsRegistering(false)} 
                style={{ color: '#aaa', cursor: 'pointer', fontSize: '13px' }}
              >
                Volver al Login
              </span>
            </>
          )}
        </form>
      </div>
    </div>
  );
}