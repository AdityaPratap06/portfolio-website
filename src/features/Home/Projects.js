import { CenterX } from "@/common/CenterX";
import VideoPlayer from "@/component/VideoPlayer";
import { Box, Button, Flex, Image, ListItem, Tag, Text, UnorderedList } from "@chakra-ui/react";
import { map } from "lodash";
import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi"

export const Projects = () => {

    const projects = [
        {
            id: 1,
            name: "Personal Portfolio Website",
            img: "portfolio.png",
            tags: ["HTML", "CSS", "JavaScript", "React.Js", "Next.Js", "Chakra ui"],
            link: "https://aditya-portfolio-website.vercel.app/",
            content: [
                "Developed a fully responsive personal portfolio website showcasing my skills,Experience, projects, and achievements, enhancing my online presence and professional branding",
                "Crafted an engaging and visually appealing design using HTML, CSS, and JavaScript, React.js, Next.js & Chakra ui ensuring optimal display on various devices and screen sizes"
            ]
        },
        // {
        //     id: 2,
        //     name: "Personal Portfolio Website",
        //     img: "portfolio.png",
        //     tags: ["HTML", "CSS", "JavaScript", "React.Js", "Next.Js", "Chakra ui"],
        //     content: [
        //         "Developed a fully responsive personal portfolio website showcasing my skills,Experience, projects, and achievements, enhancing my online presence and professional branding",
        //         "Crafted an engaging and visually appealing design using HTML, CSS, and JavaScript, React.js, Next.js & Chakra ui ensuring optimal display on various devices and screen sizes"
        //     ]
        // },
        // {
        //     id: 3,
        //     name: "Personal Portfolio Website",
        //     img: "portfolio.png",
        //     tags: ["HTML", "CSS", "JavaScript", "React.Js", "Next.Js", "Chakra ui"],
        //     content: [
        //         "Developed a fully responsive personal portfolio website showcasing my skills,Experience, projects, and achievements, enhancing my online presence and professional branding",
        //         "Crafted an engaging and visually appealing design using HTML, CSS, and JavaScript, React.js, Next.js & Chakra ui ensuring optimal display on various devices and screen sizes"
        //     ]
        // },
        // {
        //     id: 1,
        //     name: "Personal Portfolio Website",
        //     img: "portfolio.png",
        //     tags: ["HTML", "CSS", "JavaScript", "React.Js", "Next.Js", "Chakra ui"],
        //     content: [
        //         "Developed a fully responsive personal portfolio website showcasing my skills,Experience, projects, and achievements, enhancing my online presence and professional branding",
        //         "Crafted an engaging and visually appealing design using HTML, CSS, and JavaScript, React.js, Next.js & Chakra ui ensuring optimal display on various devices and screen sizes"
        //     ]
        // },
    ]
    const [isHovered, setHovered] = useState(false);
    return (
        <Box bg="gray.50" py={20} id={"projects"}>
            <CenterX>
                <Box w="100%">
                    <Flex justify={"center"} fontSize={30} fontWeight={"bold"}>
                        <Text px={2} borderBottom={"3px solid"}>Projects</Text>
                    </Flex>
                    <Flex flexWrap={"wrap"}>
                        {map(projects, (p, i) => (
                            <Box w={{ base: '100%', md: "50%", xl: "33.33%" }} p={5} key={p.id} bg="white" mt={10}> {/* border={"1px solid"} borderColor={"gray.100"} borderRadius={10}>*/}
                                <Box position={"relative"} bg="white" h={150} role="group" overflow="hidden" borderRadius={10}>
                                    <Image pos={"absolute"} w="100%" h="100%" src={p.img} alt={p.name} objectFit={"contain"} opacity={1} transition="transform 0.3s ease-in-out" _groupHover={{ opacity: 0.3, transform: "scale(1.1)" }} />
                                    <Flex h="100%" align={"center"} justify={"center"} display={"none"} _groupHover={{ display: "flex" }}>
                                        <Button variant={"ghost"} colorScheme="none" rightIcon={<BiLinkExternal />} onClick={() => window.open(p.link)}>Preview</Button>
                                    </Flex>
                                </Box>
                                <Flex mt={5} flexWrap={"wrap"}>
                                    {map(p.tags, tag => (
                                        <Tag mb={2} mr={2} variant={"outline"} colorScheme="blue">{tag}</Tag>
                                    ))}
                                </Flex>
                                <Text mt={5} fontSize={{ base: 18, md: 22 }} textAlign={"left"} fontWeight={"semibold"}>{p.name}</Text>
                                <UnorderedList mt={3} fontSize={14} color="gray.600">
                                    {map(p.content, c => (
                                        <ListItem textAlign={"justify"}>{c}</ListItem>
                                    ))}
                                </UnorderedList>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </CenterX>
        </Box>
    )
}