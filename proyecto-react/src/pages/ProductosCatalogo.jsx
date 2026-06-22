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
    <div style={{ padding: '40px', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <button onClick={backToDashboard} style={{ background: 'none', color: '#aaa', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <h2>Productos Disponibles</h2>
      <p style={{ color: '#888', marginBottom: '20px' }}>Catálogo maestro de marcas asignadas</p>

      <div style={{ backgroundColor: '#222', borderRadius: '10px', padding: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {marcasYModelos.map((producto, index) => (
            <li key={index} style={{ padding: '15px 10px', borderBottom: index !== marcasYModelos.length - 1 ? '1px solid #333' : 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#888' }}>•</span> {producto}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}