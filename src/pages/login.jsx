import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); 

    if (documento.trim() !== '' && password.trim() !== '') {
      try {
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ documento, password })
        });

        const data = await response.json();

        if (response.ok) {
          
          localStorage.setItem("id_usuario", data.id); 
          localStorage.setItem("usuario", data.usuario);
          localStorage.setItem("id_rol", data.id_rol); 
          
          const rolParaReact = data.id_rol === "1" ? "admin" : "bodeguero";
          
          onLogin(rolParaReact); 
        } else {
          alert(data.mensaje || "Credenciales inválidas");
        }
      } catch (error) {
        console.error("Error de conexión:", error);
        alert("Error de conexión con el backend. ¿Está corriendo Flask?");
      }
    } else {
      alert("Por favor, ingresa tu documento y contraseña.");
    }
  };

  return (
    <div className="login-container" style={{ backgroundColor: '#121212', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div className="login-card" style={{ textAlign: 'center', color: '#fff', width: '320px', padding: '30px', backgroundColor: '#1e1e1e', borderRadius: '12px', border: '1px solid #333' }}>
        <h1 style={{ fontWeight: 'bold', letterSpacing: '2px', margin: 0, fontSize: '28px' }}>Harvic</h1>
        <p style={{ opacity: 0.7, fontSize: '14px', marginBottom: '25px', color: '#aaa' }}>ZoundInventory</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '12px', color: '#aaa', display: 'block', marginBottom: '5px' }}>Documento</label>
            <input 
              type="text" 
              placeholder="Ingresa tu documento" 
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#2a2a2a', color: '#fff', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>
          
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '12px', color: '#aaa', display: 'block', marginBottom: '5px' }}>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#2a2a2a', color: '#fff', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>

          <button 
            type="submit" 
            style={{ padding: '12px', borderRadius: '8px', border: 'none', background: '#fff', color: '#000', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
          >
            Iniciar sesión
          </button>
            
        </form>
      </div>
    </div>
  );
}