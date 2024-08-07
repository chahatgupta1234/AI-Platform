import React, { useEffect, useState } from 'react';

const AIModelIntegration = () => {
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const fetchTranscript = async () => {
      const response = await fetch('http://localhost:5000/get-transcript');
      const data = await response.json();
      setTranscript(data.transcript);
    };

    fetchTranscript();
  }, []);

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">AI Model Integration</h2>
      <p>{transcript}</p>
    </div>
  );
};

export default AIModelIntegration;
