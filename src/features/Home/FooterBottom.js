import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

export const FooterBottom = () => {
    const toLinkedIn = () => {
        window.open("https://www.linkedin.com/in/aditya-mern-full-stack-developer/")
    }
    return (
        <Flex justify={"center"} bg="#000727" color={"white"} py={5}>
            Copyright
            <Flex mx={2} align={"center"}><AiOutlineCopyright /></Flex>
            2023 - All Right Reserved

            <Flex ml={3}>
                Made by <Text ml={2} borderBottom={"2px solid white"} onClick={toLinkedIn} cursor={"pointer"} _hover={{ color: "blue.200", borderColor: "blue.200" }}>Aditya Pratap Singh</Text>
            </Flex>
        </Flex>
    )
}