import { CenterX } from "@/common/CenterX";
import { BackEndIcon, FrontEndIcon, OtherIcon } from "@/component/constant";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { map } from "lodash";
import React from "react";

export const Skills = () => {
    return (
        <Box py={20} id={"skills"}>
            <Flex justify={"center"} fontSize={30} fontWeight={"bold"}>
                <Text px={2} borderBottom={"3px solid"}>Skills</Text>
            </Flex>
            <CenterX>
                <Box w="100%" mt={10}>
                    <Flex flexDir={{ base: "column", md: "row" }}>
                        <Flex w={{ base: "100%", md: "50%" }}>
                            <Text fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"semibold"}>Front-end:</Text>
                        </Flex>
                        <Flex w={{ base: "100%", md: "50%" }} flexWrap={"wrap"}>
                            {map(FrontEndIcon, icon => (
                                <Box w={95} p={2} align="center">
                                    <Image w="100%" h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                    <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex mt={5} flexDir={{ base: "column", md: "row" }}>
                        <Flex w={{ base: "100%", md: "50%" }}>
                            <Text fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"semibold"}>Back-end:</Text>
                        </Flex>
                        <Flex w={{ base: "100%", md: "50%" }} flexWrap={"wrap"}>
                            {map(BackEndIcon, icon => (
                                <Box w={95} p={2} align="center">
                                    <Image w="100%" h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                    <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex mt={5} flexDir={{ base: "column", md: "row" }}>
                        <Flex w={{ base: "100%", md: "50%" }}>
                            <Text fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"semibold"}>Other:</Text>
                        </Flex>
                        <Flex w={{ base: "100%", md: "50%" }} flexWrap={"wrap"}>
                            {map(OtherIcon, icon => (
                                <Box w={95} p={2} align="center">
                                    <Image w="100%" h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                    <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                </Box>
            </CenterX>
        </Box>
    )
}