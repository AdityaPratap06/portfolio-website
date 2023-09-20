import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const Typewriter = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const item = items[currentItemIndex];
      if (!item) {
        clearInterval(intervalId);
        return;
      }

      if (typing) {
        if (currentIndex === item.length) {
          setTyping(false);
          setTimeout(() => {
            setTyping(true);
            setCurrentIndex(item.length - 1);
          }, 1000); // Adjust the pause between items
        } else {
          setCurrentText((prevText) => prevText + item[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        if (currentIndex === 0) {
          setCurrentItemIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
          );
          setTyping(true);
        } else {
          setCurrentText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      }
    }, 100); // Adjust the typing speed as needed

    return () => clearInterval(intervalId);
  }, [currentIndex, currentItemIndex, items, typing]);

  return (
    <Box>
      {currentText}
    </Box>
  );
};

export default Typewriter;