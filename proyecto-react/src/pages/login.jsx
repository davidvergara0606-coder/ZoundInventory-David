import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 


    if (documento.trim() !== '' && password.trim() !== '') {
      const rolAsignado = documento === 'admin' ? 'admin' : 'bodeguero';
      

      localStorage.setItem("usuario", documento);
      localStorage.setItem("id_rol", rolAsignado); 
      

      onLogin(rolAsignado); 
    } else {
      alert("Por favor, ingresa tu documento y contraseña.");
    }
  };

  return (
    <div className="login-container" style={{ backgroundColor: '#121212', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="login-card" style={{ textAlign: 'center', color: '#fff', width: '320px' }}>
        <h1 style={{ fontWeight: 'bold', letterSpacing: '2px', margin: 0 }}>Harvic</h1>
        <p style={{ opacity: 0.7, fontSize: '14px', marginBottom: '20px' }}>ZoundInventory</p>
        
        <form onSubmit={isRegistering ? (e) => e.preventDefault() : handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <input 
            type="text" 
            placeholder="Documento (prueba 'admin' para rol admin)" 
            className="input-field" 
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            required={!isRegistering}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', background: '#222', color: '#fff' }}
          />
          
          {isRegistering && (
            <input type="text" placeholder="Rol" className="input-field" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', background: '#222', color: '#fff' }} />
          )}
          
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="input-field" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', background: '#222', color: '#fff' }}
          />

          <button 
            type="submit" 
            className="btn-primary"
            style={{ padding: '10px', borderRadius: '5px', border: 'none', background: '#0d6efd', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Iniciar sesión
          </button>
            
        </form>
      </div>
    </div>
  );
}