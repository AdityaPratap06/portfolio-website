import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const CenterX = ({ children }) => {
    return (
        <Box align="center">
            <Flex w={{ base: "95%", sm: "85%", md: "80%", lg: "70%" }} align="start" flexDir={{ base: "column", md: "row" }}>
                {children}
            </Flex>
        </Box>
    )
}