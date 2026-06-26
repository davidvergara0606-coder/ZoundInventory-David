import React, { useState } from 'react';

export default function Login({ onLogin }) {

  const rolUsuario = localStorage.getItem("id_rol");
  
  const [isRegistering, setIsRegistering] = useState(false);


  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documento: documento,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        
        
        localStorage.setItem("usuario", data.usuario);
        localStorage.setItem("id_rol", data.id_rol); 
        
        
        onLogin(); 
      } else {
        alert("Credenciales inválidas. Verifica tu usuario y contraseña.");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Error de conexión con el backend. ¿Está corriendo Flask?");
    }
  };

  return (
    <div className="login-container" style={{ backgroundColor: '#121212', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="login-card" style={{ textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontWeight: 'bold', letterSpacing: '2px' }}>Harvic</h1>
        <p style={{ opacity: 0.7, fontSize: '14px' }}> ZoundInventory</p>

        
        <form onSubmit={isRegistering ? (e) => e.preventDefault() : handleLogin} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <input 
            type="text" 
            placeholder="Documento" 
            className="input-field" 
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            required={!isRegistering}
          />
          
          {isRegistering && (
            <input type="text" placeholder="Rol" className="input-field" />
            
          )}
          
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="input-field" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
              <button type="submit" className="btn-primary">Iniciar sesión</button>
            
        </form>
      </div>
    </div>
  );
}