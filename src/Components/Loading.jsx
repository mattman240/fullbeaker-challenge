import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <ReactLoading type={'spin'} color="grey" height={150} width={150} />
  </div>
);

export default Loading;
