import React, { useState, useEffect } from 'react';
import { ReactMic } from 'react-mic';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }, []);

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  const onData = (recordedBlob) => {
    console.log('Chunk of real-time data: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    setRecordings([...recordings, recordedBlob]);
    socket.emit('audio', recordedBlob);
    console.log('Recorded Blob: ', recordedBlob);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Audio Recorder</h2>
      <ReactMic
        record={recording}
        className="sound-wave mb-4"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <div className="flex space-x-4 mb-4">
        <button onClick={startRecording} type="button" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Start</button>
        <button onClick={stopRecording} type="button" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Stop</button>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Recordings</h3>
        {recordings.map((rec, index) => (
          <audio key={index} controls src={rec.blobURL} className="block mb-2"></audio>
        ))}
      </div>
    </div>
  );
};

export default AudioRecorder;
