import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  
  const [petName, setPetName] = useState('');
  const [owner, setOwner] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    
    if (petName.trim().length < 3 || petName.trim().startsWith(' ')) {
      setError('Parece que la información no es correcta, por favor verifícala de nuevo');
      return;
    }

    if (owner.length < 6) {
      setError('Parece que la información no es correcta, por favor verifícala de nuevo');
      return;
    }

    
    setSubmittedData({ petName, owner });
    setPetName('');
    setOwner('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petName">Nombre de tu mascota</label>
          <input
            type="text"
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="owner">Nombre del dueño:</label>
          <input
            type="text"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {submittedData && <Card petName={submittedData.petName} owner={submittedData.owner} />}
    </div>
  );
};

export default Form;
