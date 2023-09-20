import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const CenterX = ({ children }) => {
    return (
        <Box align="center">
            <Flex w="70%" align="start" flexDir={{ base: "column", md: "row" }}>
                {children}
            </Flex>
        </Box>
    )
}