import { CenterX } from "@/common/CenterX";
import { Typewriter } from "@/common/Typewriter";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const Intro = () => {
    const router = useRouter()
    return (
        <CenterX>
            <Flex w="100%" pb={20} flexDir={{ base: "column", md: "row" }}>
                <Flex pt={10} h="100%" w={{ base: "100%", md: "50%" }} flexDir={"column"} justify="center" align={"flex-start"}>
                    <Text fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"bold"}>Hey, I am</Text>
                    <Text fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"bold"}>Aditya Pratap Singh</Text>
                    <Typewriter />
                    <Flex w="80%" flexWrap={"wrap"} my={10}>
                        <Text textAlign={"justify"}>Experienced React.js developer with 2 years of expertise. Proficient in creating responsive, high-performance web apps, and fostering collaborative team environments.</Text>
                    </Flex>
                    <Flex>
                        <Button size={{ base: 'sm', md: "md" }} colorScheme="teal" onClick={() => router.push("/Aditya-Pratap-Singh-Resume.pdf")}>Download Resume</Button>
                        <Button size={{ base: 'sm', md: "md" }} ml={3} colorScheme="blue" onClick={() => window.open("https://www.linkedin.com/in/aditya-mern-full-stack-developer/")}>Connect Us</Button>
                    </Flex>
                </Flex>
                <Box pt={10} w={{ base: "100%", md: "50%" }} position={"relative"} justify="center">
                    <Flex position={"absolute"} align="center" justify={"flex-start"} w="100%" h="100%">
                        <Image className="rotating-image" w="30%" h="30%" src="front-end-developer-image.svg" alt="" />
                    </Flex>
                    <Flex position={"absolute"} align="center" justify={"flex-start"} w="30%" h="100%">
                        <Flex flexDir={"column"} align={"center"} zIndex={10} w="100%">
                            <Text mt={-3} fontSize={40} fontWeight={"bold"}>2</Text>
                            <Text mt={-3}>Years</Text>
                        </Flex>
                    </Flex>
                    <Image h="100%" w="100%" src="/Aditya-intro1.webp" alt="Aditya" />
                </Box>
            </Flex>
        </CenterX>
    )
}