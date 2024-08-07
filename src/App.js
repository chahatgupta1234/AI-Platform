// src/App.js

import React from 'react';
import VideoFeed from './components/VideoFeed';
import ChatWindow from './components/ChatWindow';
import TranscriptDisplay from './components/TranscriptDisplay';
import AudioRecorder from './components/AudioRecorder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interview AI</h1>
      </header>
      <VideoFeed />
      <ChatWindow />
      <TranscriptDisplay />
      <AudioRecorder />
    </div>
  );
}

export default App;
