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
                "Developed a fully responsive personal portfolio website showcasing my skills,Experience, projects, and achievements, enhancing my online presence and professional branding.",
                "Crafted an engaging and visually appealing design using HTML, CSS, and JavaScript, React.js, Next.js & Chakra ui ensuring optimal display on various devices and screen sizes."
            ]
        },
        {
            id: 2,
            name: "Coaching Log",
            img: "coachinglog.png",
            tags: ["HTML", "CSS", "JavaScript", "React.Js", "Next.Js", "Nest.Js", "MongoDB", "Chakra ui"],
            link: "http://localhost:3000/coaching-log",
            // link: "https://aditya-portfolio-website.vercel.app/coaching-log",
            content: [
                "Conceptualized and developed a comprehensive student enquiry management system, streamlining the entire process from initial inquiry to admission for educational institutes.",
                "Employed JavaScript, Next.js, Nest.js, and Redux to build a robust and responsive front-end, while ensuring seamless data flow between components"
            ]
        },
        {
            id: 3,
            name: "NewsFeed Website",
            img: "news-main.png",
            tags: ["HTML", "CSS", "JavaScript", "React.Js", "Chakra ui", "SWR"],
            link: "http://localhost:3000/newsfeed-website",
            // link: "https://aditya-portfolio-website.vercel.app/newsfeed-website",
            content: [
                "Lead the design and implementation of a dynamic NewsFeed platform, enabling institutes and coaching centers to seamlessly share photos, videos, polls, and events with staff and parents.",
                "Integrated interactive features that enhanced user engagement, such as real-time updates and notifications for new content.",
                "Leveraged technologies including JavaScript, React.js, Next.js, and SWR to ensure efficient data fetching and a smooth user experience."
            ]
        },
        {
            id: 3,
            name: "The Blogging Buzz",
            img: "thebloggingbuzz.png",
            tags: ["HTML", "CSS", "JavaScript", "React.Js", "Next.Js", "Chakra ui", "Node.Js", "MongoDB", "Express"],
            link: "https://blog-website-web.vercel.app/",
            content: [
                "Responsive Design: Ensures a seamless viewing experience across various devices.",
                "User-Friendly Interface: Intuitive navigation for easy exploration of content.",
                "Categories and Tags: Organized content for effortless filtering and discovery.",
                "Search Functionality: Enables users to find specific topics quickly.",
                "Interactive Elements: Includes features like comment sections and social media sharing for enhanced user engagement.",
                "SEO Optimized: Implemented strategies for improved search engine visibility.",
                "Encourage visitors to explore the blog or engage with the content through a clear call-to-action."
            ]
        },
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