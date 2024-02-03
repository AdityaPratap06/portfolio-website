import { CenterX } from "@/common/CenterX";
import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export const Experiences = () => {
    return (
        <Box id={"experiences"} position={"relative"}>
            <Image loading="lazy" pos={"absolute"} w="100%" h="100%" src={'/experiencebg.avif'} alt="Work Experience" objectFit={"cover"} opacity={0.4} />
            <CenterX>
                <Box w="100%" zIndex={1} py={20}>
                    <Flex justify={"center"} fontSize={30} fontWeight={"bold"}>
                        <Text px={2} borderBottom={"3px solid"}>Work Experiences</Text>
                    </Flex>
                    <Flex w="100%" mt={10} h="fit-content" align={"center"} flexDir={{ base: "column", lg: "row" }}>
                        <Box w="50%" h="100%" display={{ base: "none", lg: "flex" }}>
                            <Image loading={"lazy"} h="100%" w="100%" src={"/experience.png"} alt="Work Experience" />
                        </Box>
                        <Box w={{ base: "100%", lg: "50%" }} h="100%">
                            <Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h={17} w={17} bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                                <Flex w="90%" p={4} mb={5} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>Jul 2022 - Present</Text>
                                    <Text fontSize={18} textAlign={"left"} fontWeight={"semibold"}>Software Developer 1 | Schoollog</Text>
                                    <UnorderedList mt={2} textAlign={"left"} fontSize={14}>
                                        <ListItem>Collaborated in the development of [Schoollog, Hostellog, NewsFeed, Coachinglog, COCO, GCI]</ListItem>
                                        <ListItem>Designed and developed scalable web applications using modern technologies such as HTML, CSS, JavaScript, React.Js, Next.Js, TypeScript, Redux, Chakra UI, Ant Design, Rest APIs.</ListItem>
                                        <ListItem>Implemented responsive and intuitive user interfaces, focusing on usability and accessibility principles</ListItem>
                                        <ListItem>Collaborated with product managers and designers to translate requirements into technical specifications and deliverables</ListItem>
                                        <ListItem>Stayed updated on emerging technologies and industry trends to continuously improve skills and drive innovation in software development</ListItem>
                                    </UnorderedList>
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h={17} w={17} bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                                <Flex w="90%" p={4} mb={5} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>Jan 2022 - Jun 2022</Text>
                                    <Text fontSize={18} textAlign={"left"} fontWeight={"semibold"}>Developer Trainee | Schoollog</Text>
                                    <UnorderedList mt={2} textAlign={"left"} fontSize={14}>
                                        <ListItem>Gained expertise in React.js through hands-on projects</ListItem>
                                        <ListItem>Worked closely with senior developers to understand project requirements, coding standards, and best practices.</ListItem>
                                        <ListItem>Participated in code reviews, incorporating feedback to enhance code quality and align with established coding conventions.</ListItem>
                                        <ListItem>Contributed to live projects within the organization</ListItem>
                                        <ListItem>Gained exposure to the software development lifecycle, from requirements gathering to testing and deployment.</ListItem>
                                    </UnorderedList>
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex w="10%" flexDir={"column"} align={"center"}>
                                    <Flex h={17} w={17} bg="blue.500" borderRadius={"50%"} />
                                    <Box h="88%" my={1} borderLeft={"2px solid"} borderColor={"gray.300"} />
                                </Flex>
                                <Flex w="90%" p={4} flexDir={"column"} align={"flex-start"} bg="white" border={"1px solid"} borderColor={"gray.200"}>
                                    <Text color="blue.500" fontSize={14} fontWeight={"semibold"}>Jul 2021 - Dec 2021</Text>
                                    <Text fontSize={18} textAlign={"left"} fontWeight={"semibold"}>MERN Full Stack Trainee (Online)</Text>
                                    <UnorderedList mt={2} textAlign={"left"} fontSize={14}>
                                        <ListItem>Developed websites using JavaScript, Node.js, Express.js, MongoDB, and React.js</ListItem>
                                        <ListItem>Acquired skills in full-stack development, front-end, and back-end fundamentals</ListItem>
                                        <ListItem>Actively sought learning opportunities, attending internal workshops, training sessions, and industry events to enhance technical skills.</ListItem>
                                    </UnorderedList>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </CenterX>
        </Box >
    )
}