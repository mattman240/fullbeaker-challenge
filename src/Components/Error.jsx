import React from 'react';

const Error = ({ message }: { message: string }) => (
  <h3 style={{ color: 'red' }}>{message}</h3>
);

export default Error;
