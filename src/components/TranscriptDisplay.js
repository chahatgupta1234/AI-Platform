import React, { useState } from 'react';

const TranscriptDisplay = () => {
  const [transcripts, setTranscripts] = useState([]);

  const addTranscript = (text) => {
    setTranscripts([...transcripts, text]);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Transcript Display</h2>
      <div className="transcript-box border border-gray-400 rounded-lg p-4 max-h-60 overflow-y-scroll">
        {transcripts.map((transcript, index) => (
          <p key={index} className="mb-2">{transcript}</p>
        ))}
      </div>
    </div>
  );
};

export default TranscriptDisplay;
