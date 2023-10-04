import { CenterX } from "@/common/CenterX";
import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export const Experiences = () => {
    return (
        <Box bg="gray.50" py={20} id={"experiences"}>
            <CenterX>
                <Box w="100%">
                    <Flex justify={"center"} fontSize={30} fontWeight={"bold"}>
                        <Text px={2} borderBottom={"3px solid"}>Work Experiences</Text>
                    </Flex>
                    <Flex w="100%" mt={10} h="fit-content">
                        <Box w="50%" h="100%">
                            <Image src={"/work-experience.avif"} alt="Work Experience" />
                        </Box>
                        <Box w="50%" h="100%">
                            <Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h="10%" w="27%" bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                                <Flex w="90%" p={4} mb={5} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>Jul 2022 - Present</Text>
                                    <Text fontSize={18} fontWeight={"semibold"}>Software Developer 1 | Schoollog</Text>
                                    <UnorderedList mt={2} textAlign={"left"} fontSize={14}>
                                        <ListItem>Collaborated in the development of [Schoollog, Hostellog, NewsFeed, Coachinglog, COCO, GCI]</ListItem>
                                    </UnorderedList>
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h="10%" w="27%" bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                                <Flex w="90%" p={4} mb={5} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>Jan 2022 - Jun 2022</Text>
                                    <Text fontSize={18} fontWeight={"semibold"}>Developer Trainee | Schoollog</Text>
                                    <UnorderedList mt={2} textAlign={"left"} fontSize={14}>
                                        <ListItem>Gained expertise in React.js through hands-on projects</ListItem>
                                        <ListItem>Contributed to live projects within the organization</ListItem>
                                    </UnorderedList>
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h="9%" w="27%" bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                                <Flex w="90%" p={4} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>Jul 2021 - Dec 2021</Text>
                                    <Text fontSize={18} fontWeight={"semibold"}>MERN Full Stack Trainee (Online)</Text>
                                    <UnorderedList mt={2} textAlign={"left"} fontSize={14}>
                                        <ListItem>Developed websites using JavaScript, Node.js, Express.js, MongoDB, and React.js</ListItem>
                                        <ListItem>Acquired skills in full-stack development, front-end, and back-end fundamentals</ListItem>
                                    </UnorderedList>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </CenterX>
        </Box>
    )
}