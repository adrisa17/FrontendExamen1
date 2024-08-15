import React from 'react';

const Card = ({ petName, owner }) => {
  return (
    <div className="card">
      <h2>Información de la Mascota</h2>
      <p><strong>Nombre de la mascota:</strong> {petName}</p>
      <p><strong>Nombre del dueño:</strong> {owner}</p>
    </div>
  );
};

export default Card;