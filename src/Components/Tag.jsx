import React from 'react';

const Tag = ({ tag }) => (
  <div
    key={tag}
    style={{
      border: '1px solid black',
      borderRadius: '20px',
      height: 'fit-content',
      margin: '2px',
      padding: '2px 15px',
      width: 'fit-content',
    }}
  >
    {tag}
  </div>
);

export default Tag;
