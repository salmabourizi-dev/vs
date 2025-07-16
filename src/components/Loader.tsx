import React from 'react';

const zoomStyle: React.CSSProperties = {
  animation: 'zoomInOut 1.2s ease-in-out infinite',
};

const Loader: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      background: '#fff',
      zIndex: 9999,
    }}>
      <img src="/documents/logo.png" alt="Logo" style={{ width: 180, height: 180, ...zoomStyle }} />
      <style>
        {`@keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }`}
      </style>
    </div>
  );
};

export default Loader; 