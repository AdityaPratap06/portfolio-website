import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaUndo,
  FaRedo,
  FaExpand,
  FaCompress,
} from 'react-icons/fa';
import {RiSpeedLine} from "react-icons/ri"

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  const togglePlayPause = () => {
    setPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSliderChange = (value) => {
    setCurrentTime(value);
    videoRef.current.currentTime = value;
  };

  const handleNext = () => {
    videoRef.current.currentTime += 10;
  };

  const handlePrevious = () => {
    videoRef.current.currentTime -= 10;
  };

  const handleFullScreen = () => {
    if (typeof window !== 'undefined' && window.document) {
      const element = videoRef.current;

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };

  const handleSpeedChange = () => {
    const newSpeed = prompt('Enter speed (e.g., 0.5 for half speed, 2 for double speed):');
    if (newSpeed && !isNaN(newSpeed)) {
      setSpeed(parseFloat(newSpeed));
      videoRef.current.playbackRate = parseFloat(newSpeed);
    }
  };

  return (
    <Box>
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        style={{ width: '100%' }}
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Flex mt={4} align="center" justify="center">
        <IconButton icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlayPause} />
        <IconButton icon={<FaStepBackward />} onClick={handlePrevious} />
        <IconButton icon={<FaStepForward />} onClick={handleNext} />
        <IconButton icon={<FaUndo />} onClick={() => handleSliderChange(currentTime - 10)} />
        <IconButton icon={<FaRedo />} onClick={() => handleSliderChange(currentTime + 10)} />
        <Text mx={2}>{Math.floor(currentTime)}s / {Math.floor(duration)}s</Text>
        <Slider
          flex="1"
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <IconButton icon={<RiSpeedLine />} onClick={handleSpeedChange} />
        {typeof window !== 'undefined' && window.document && (
          <IconButton icon={window.document.fullscreenElement ? <FaCompress /> : <FaExpand />} onClick={handleFullScreen} />
        )}
      </Flex>
    </Box>
  );
};

export default VideoPlayer;
