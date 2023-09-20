import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const Intro = () => {
    const router = useRouter()
    const portfolioItems = [
        "Project 1: A web application",
        "Project 2: A mobile app",
        "Project 3: A portfolio website",
    ];
    return (
        <Flex h="80vh" bg="gray.50">
            <Box w="15%">
            </Box>
            <Flex w="35%" flexDir={"column"} justify="center">
                <Text fontSize={36} fontWeight={"bold"}>Hey, I am</Text>
                <Text fontSize={36} fontWeight={"bold"}>Aditya Pratap Singh</Text>
                <Text fontSize={36} fontWeight={"bold"}>Front-End Developer</Text>
                {/* <Typewriter items={portfolioItems} /> */}
                <Flex w="80%" flexWrap={"wrap"} my={10}>
                    <Text>Experienced React.js developer with 2 years of expertise. Proficient in creating responsive, high-performance web apps, and fostering collaborative team environments.</Text>
                </Flex>
                <Flex>
                    <Button onClick={() => router.push("/Aditya-Pratap-Singh-Resume.pdf")}>Download Resume</Button>
                    <Button ml={3} colorScheme="blue" onClick={() => window.open("https://www.linkedin.com/in/aditya-mern-full-stack-developer/")}>Connect Us</Button>
                </Flex>
            </Flex>
            <Box w="35%" position={"relative"}>
                <Flex position={"absolute"} align="center" justify={"flex-start"} w="100%" h="100%">
                    <Image className="rotating-image" w="30%" h="30%" src="front-end-developer-image.svg" alt="" />
                </Flex>
                <Flex position={"absolute"} align="center" justify={"flex-start"} w="30%" h="100%">
                    <Flex flexDir={"column"} align={"center"} zIndex={10} w="100%">
                        <Text mt={-3} fontSize={40} fontWeight={"bold"}>2</Text>
                        <Text mt={-3}>Years</Text>
                    </Flex>
                </Flex>
                <Image src="/Aditya-intro1.png" alt="Aditya" />
            </Box>
            <Box w="15%">
            </Box>
        </Flex>
    )
}