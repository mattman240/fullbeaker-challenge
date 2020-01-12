import React from 'react';

import newTab from './newTab.png';

const Downloads = ({ saved }) => (
  <div
    style={{ width: '25%', border: '1px solid black', borderRightWidth: '2px' }}
  >
    <h1>Saved</h1>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(saved).map(savedKey => {
        const item = saved[savedKey];
        return (
          <a
            style={{
              alignItems: 'center',
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.id}
            <img style={{ width: '15px' }} src={newTab} alt="new tab icon" />
          </a>
        );
      })}
    </div>
  </div>
);

export default Downloads;
