import React, { useState } from 'react';
import './MagicForm.css';
import { createMagic } from '../../api/magic';

const MagicForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMagic = { name, type };
      const response = await createMagic(newMagic);
      console.log('response', response)
      setMessage(`Successfully created new magic spell !`);
    } catch (error) {
      setMessage('Error creating new magic spell. Please try again.', error);
    }
  };

  return (
    <div className='content'>
      <h1>Create New Magic</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <label> Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div className='input-box'>
          <label> Type:
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MagicForm;