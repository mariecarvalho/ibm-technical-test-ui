import React from 'react';
import './MagicList.css';

import { useState, useEffect } from 'react';
import { getMagics } from '../../api/magic';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

import { updateMagic, deleteMagic } from '../../api/magic';

const MagicList = () => {

  const [magics, setMagics] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMagics = async () => {
      const data = await getMagics();
      setMagics(data);
    };

    fetchMagics();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteMagic(id);
      const updatedMagics = magics.filter((magic) => magic.id !== magic);
      setMagics(updatedMagics);
      setMessage('User deleted successfully');
    } catch (err) {
      setMessage('Error deleting user. Please try again or contact system admin', err);
    }

  };

  const handleEdit = async (magic) => {
    try {
      await updateMagic(magic);
      const updatedMagics = magics.filter((magic) => magic.id !== magic);
      setMagics(updatedMagics);
      setMessage('User edited successfully');
    } catch (err) {
      setMessage('Error editing user. Please try again or contact system admin', err);
    }
  };

  return (
    <div className='content content-list'>
      <h1>List Magic</h1>
      <ul>
        {magics.sort((a, b) => a.name.localeCompare(b.name)).map((magic) => (
          <li key={magic.id}>
            <Link to={`/spells/${magic.id}`} state={{ data: magic }}>
              {magic.name} - {magic.type} </Link>
            <span>
              <AiFillEdit onClick={() => handleEdit(magic)} />
              <AiFillDelete onClick={() => handleDelete(magic.id)} />
            </span>
          </li>
        ))}
      </ul>

      <div className="footer-list">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default MagicList;