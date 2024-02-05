import React from 'react';

import { useLocation } from 'react-router-dom';

const MagicDetails = () => {
  const { state } = useLocation();;
  const magic = state?.data;

  if (!magic) {
    return <div>Magic not found</div>;
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(magic.createdAt));

  return (
    <div className='content'>
      <h1>{magic.name}</h1>
      <p>Type: {magic.type}</p>
      <p>Creation Date: {formattedDate}</p>
    </div>
  );
};

export default MagicDetails;