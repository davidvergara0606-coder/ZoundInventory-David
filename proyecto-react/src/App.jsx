import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Header 
        titulo="Registro de Movimientos de Mercancía" 
        descripcion="Gestión de los inventarios y los despachos tecnológicos" 
      />
    </div>
  );
}

export default App;