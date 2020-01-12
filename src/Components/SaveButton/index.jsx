import React, { useState } from 'react';

import './SaveButton.css';

const SaveButton = ({ onSave }) => {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={() => {
        if (saved) return;
        onSave();
        setSaved(!saved);
      }}
      className="save-button"
    >
      {!saved ? 'Save' : 'Saved'}
    </button>
  );
};

export default SaveButton;
