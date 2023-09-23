import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Skills = () => {
    return (
        <Box h="80vh">
            <Flex w="100%">
                <Box w="15%">
                </Box>
                <Box w="70%">
                    <Flex>
                        <Flex>
                            <Text>Front-end:</Text>
                        </Flex>
                        <Flex>
                            {map(FrontEndIcon, icon => (
                                <Box>
                                    {/* <Image src={icon.icon} alt={icon.title} /> */}
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                </Box>
                <Box w="15%">
                </Box>
            </Flex>
        </Box>
    )
}