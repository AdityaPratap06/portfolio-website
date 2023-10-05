import { CenterX } from "@/common/CenterX";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

export const Footer = () => {
    return (
        <Box p={20} bg="#000727" color={"white"}>
            <CenterX>
                <Flex w="100%">
                    <Box w="40%">
                        <Text>Aditya</Text>
                        
                    </Box>
                </Flex>
            </CenterX>
        </Box>
    )
}