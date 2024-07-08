import React from "react";

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  return (
    <div className="mt-2">
      <audio controls src={audioUrl}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
