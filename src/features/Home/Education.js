import { CenterX } from "@/common/CenterX";
import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export const Education = () => {
    return (
        <Box bg="white" py={20} id={"education"}>
            <CenterX>
                <Box w="100%">
                    <Flex justify={"center"} fontSize={30} fontWeight={"bold"}>
                        <Text px={2} borderBottom={"3px solid"}>Education</Text>
                    </Flex>
                    <Flex w="100%" mt={10} h="fit-content" align={"center"} flexDir={{ base: "column", lg: "row" }}>
                        <Box w={{ base: "100%", lg: "50%" }} h="100%">
                            <Flex>
                                <Flex w="90%" p={4} mb={5} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>2018 - 2022</Text>
                                    <Text fontSize={18} fontWeight={"semibold"}>B. Tech | Computer Science</Text>
                                    <Text mt={2} textAlign={"left"} fontSize={14}>Global Institute of Technology, Jaipur</Text>
                                </Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h={17} w={17} bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex w="90%" p={4} mb={5} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>2017 - 2018</Text>
                                    <Text fontSize={18} fontWeight={"semibold"}>XII | CBSE Board</Text>
                                    <Text mt={2} textAlign={"left"} fontSize={14}>Indira Memorial Sr. Sec School</Text>
                                </Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h={17} w={17} bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex w="90%" p={4} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>2015 - 2016</Text>
                                    <Text fontSize={18} fontWeight={"semibold"}>X | CBSE Board</Text>
                                    <Text mt={2} textAlign={"left"} fontSize={14}>Indira Memorial Sr. Sec School</Text>
                                </Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h={17} w={17} bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                            </Flex>
                        </Box>
                        <Box w="50%" h="100%" display={{ base: "none", lg: "flex" }}>
                            <Image src={"/education.png"} alt="Education" />
                        </Box>
                    </Flex>
                </Box>
            </CenterX>
        </Box>
    )
}