import React from 'react';

export default function ProductosCatalogo({ backToDashboard }) {
  const marcasYModelos = [
    'JBL PartyBox 310',
    'JBL Live 660NC (diadema con cancelación de ruido)',
    'Bose Noise Cancelling Headphones 700',
    'Bose Smart Soundbar 900',
    'Sony WH-1000XM5 (auriculares con cancelación de ruido)',
    'Harman Kardon Aura Studio 3',
    'JBL Bar 9.1 True Wireless Surround',
    'Beosound A1 2nd Gen (parlante portátil)',
    'JBL Xtreme 3'
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={backToDashboard} 
        style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px', fontSize: '14px' }}
      >
        ← Volver al Panel
      </button>

      <h2 style={{ marginBottom: '5px', fontWeight: 'bold', letterSpacing: '1px' }}>Productos Disponibles</h2>
      <p style={{ color: '#888', marginBottom: '25px', fontSize: '14px' }}>Catálogo maestro de marcas y equipos de audio asignados</p>

      <div style={{ backgroundColor: '#222', borderRadius: '12px', padding: '10px 20px', border: '1px solid #333', maxWidth: '800px' }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {marcasYModelos.map((producto, index) => (
            <li key={index} style={{ padding: '15px 10px', borderBottom: index !== marcasYModelos.length - 1 ? '1px solid #333' : 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#00d1b2', fontWeight: 'bold' }}>•</span> 
              <span style={{ fontWeight: '500' }}>{producto}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}