import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

export const FooterBottom = () => {
    const toLinkedIn = () => {
        window.open("https://www.linkedin.com/in/aditya-mern-full-stack-developer/")
    }
    return (
        <Flex justify={"center"} align={"center"} bg="#000727" color={"white"} py={5} flexDir={{ base: "column", sm: "row" }} fontSize={{ base: 10, sm: 12, md: 16 }} borderTop={"1px solid"} borderColor={"whiteAlpha.300"}>
            <Flex>
                Copyright
                <Flex mx={2} align={"center"}><AiOutlineCopyright /></Flex>
                2023 - All Right Reserved
            </Flex>
            <Flex ml={{ base: 0, sm: 3 }}>
                Made by <Text ml={2} borderBottom={"2px solid white"} onClick={toLinkedIn} cursor={"pointer"} _hover={{ color: "blue.200", borderColor: "blue.200" }}>Aditya Pratap Singh</Text>
            </Flex>
        </Flex>
    )
}