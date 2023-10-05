import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

export const Typewriter = () => {
  const words = [
    "Front-end Developer",
    "React.Js Developer",
    "Web App Developer"
  ];

  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        if (currentWord.length < words[index]?.length) {
          setCurrentWord((prev) => prev + words[index][currentWord.length]);
        } else {
          setForward(false);
        }
      } else {
        if (currentWord.length > 0) {
          setCurrentWord((prev) => prev.slice(0, -1));
        } else {
          setForward(true);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 70);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord, forward, index]);

  return (
    <Flex>
      <Flex fontSize={36} fontWeight={"bold"}>I&apos;m a</Flex>
      <Flex className="word" ml={1} fontSize={36} fontWeight={"bold"} color="blue.500">{currentWord}</Flex>
    </Flex>
  )
};
