//componnts/Button.tsx
import React from 'react';

const Button: React.FC<{ onClick: () => void; label: string }> =({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default Button;
