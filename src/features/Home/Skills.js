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

                    <Flex flexDir={"column"}>
                        <Flex w={"100%"}>
                            <Text fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"semibold"}>Front-end:</Text>
                        </Flex>
                        <Flex w={"100%"} flexWrap={"wrap"} justify={"flex-start"}>
                            {map(FrontEndIcon, icon => (
                                <Box w={{ base: "50%", sm: "33.33%", md: "20%" }} align="center" px={2} my={2}>
                                    <Box className="box" p={2}>
                                        <Image h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                        <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex flexDir={"column"} mt={10}>
                        <Flex w={"100%"}>
                            <Text fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"semibold"}>Back-end:</Text>
                        </Flex>
                        <Flex w={"100%"} flexWrap={"wrap"} justify={"flex-start"}>
                            {map(BackEndIcon, icon => (
                                <Box w={{ base: "50%", sm: "33.33%", md: "20%" }} align="center" px={2} my={2}>
                                    <Box className="box" p={2}>
                                        <Image h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                        <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex flexDir={"column"} mt={10}>
                        <Flex w={"100%"}>
                            <Text fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"semibold"}>Other:</Text>
                        </Flex>
                        <Flex w={"100%"} flexWrap={"wrap"} justify={"flex-start"}>
                            {map(OtherIcon, icon => (
                                <Box w={{ base: "50%", sm: "33.33%", md: "20%" }} align="center" px={2} my={2}>
                                    <Box className="box" p={2}>
                                        <Image h="60pt" objectFit={"contain"} src={icon.icon} alt={icon.title} />
                                        <Text mt={2} fontSize={17} fontWeight={"semibold"}>{icon.title}</Text>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                </Box>
            </CenterX>
        </Box>
    )
}