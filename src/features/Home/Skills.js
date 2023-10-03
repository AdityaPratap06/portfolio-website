import { BackEndIcon, FrontEndIcon, OtherIcon } from "@/component/constant";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { map } from "lodash";
import React from "react";

export const Skills = () => {
    return (
        <Box p={20}>
            <Flex justify={"center"} fontSize={30} fontWeight={"bold"}>Skills</Flex>
            <Flex w="100%">
                <Box w="15%">
                </Box>
                <Box w="70%" mt={10}>
                    <Flex>
                        <Flex w="50%">
                            <Text fontSize={36} fontWeight={"semibold"}>Front-end:</Text>
                        </Flex>
                        <Flex w="50%" flexWrap={"wrap"}>
                            {map(FrontEndIcon, icon => (
                                <Box w="20%" p={2} align="center">
                                    <Image w="100%" h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                    <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex mt={5}>
                        <Flex w="50%">
                            <Text fontSize={36} fontWeight={"semibold"}>Back-end:</Text>
                        </Flex>
                        <Flex w="50%" flexWrap={"wrap"}>
                            {map(BackEndIcon, icon => (
                                <Box w="20%" p={2} align="center">
                                    <Image w="100%" h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                    <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex mt={5}>
                        <Flex w="50%">
                            <Text fontSize={36} fontWeight={"semibold"}>Other:</Text>
                        </Flex>
                        <Flex w="50%" flexWrap={"wrap"}>
                            {map(OtherIcon, icon => (
                                <Box w="20%" p={2} align="center">
                                    <Image w="100%" h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                    <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
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