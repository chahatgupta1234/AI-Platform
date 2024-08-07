import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const VideoFeed = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); // You can send this image to your server
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Video Feed</h2>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        className="border border-gray-400 rounded-lg mb-4"
      />
      <button
        onClick={capture}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Capture
      </button>
    </div>
  );
};

export default VideoFeed;
