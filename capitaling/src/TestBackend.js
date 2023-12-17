import React, { useState, useEffect } from 'react';

function TestBackend() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Fetch data from your Express server
    fetch('http://localhost:3001/api/test')
  .then(response => response.text())
  .then(data => {
    setResponse(data);
  })
  .catch(error => console.error('Error fetching data:', error));

  }, []);

  return (
    <div>
      <h1>Test Backend Connection</h1>
      <p>Response from backend: {response}</p>
    </div>
  );
}

export default TestBackend;
