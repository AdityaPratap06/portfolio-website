import { CenterX } from "@/common/CenterX";
import { Box, Flex, Text } from "@chakra-ui/react";
import { map } from "lodash";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineCopyright, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

export const Footer = () => {
    const header = [
        { id: 1, title: "Home", href: "home" },
        { id: 2, title: "Skills", href: "skills" },
        { id: 3, title: "Experiences", href: "experiences" },
        { id: 4, title: "Projects", href: "projects" },
        { id: 5, title: "Education", href: "education" },
        { id: 5, title: "Testimonials", href: "testimonials" },
    ]
    return (
        <Box py={20} bg="#000727" color={"white"}>
            <CenterX>
                <Flex w="100%" justify={"space-between"} flexDir={{ base: "column", md: "row" }}>
                    <Flex w={{ base: "100%", md: "40%" }} flexDir={"column"} align={"flex-start"}>
                        <Text fontSize={28} fontWeight={"semibold"}>Aditya</Text>
                        <Text my={5} textAlign={"left"}>I&apos;m Aditya Pratap Singh, an enthusiastic front-end developer with a passion for crafting dynamic and engaging user experiences</Text>
                        <Flex>
                            <IconX icon={<AiFillLinkedin />} link={"https://www.linkedin.com/in/aditya-mern-full-stack-developer/"} />
                            <IconX icon={<FaFacebookF />} link={"https://www.facebook.com/aditya.jadon.52056"} />
                            <IconX icon={<AiFillGithub />} link={"https://github.com/AdityaPratap06"} />
                            <IconX icon={<AiOutlineInstagram />} link={"https://www.instagram.com/adityajadon_06/"} />
                        </Flex>
                    </Flex>
                    <Box w={{ w: "100%", md: "30%" }} mt={{ base: 5, md: 0 }} pl={{ base: 0, md: 5, lg: 10 }} pr={{ base: 0, md: 5, lg: 0 }}>
                        <Text textAlign={"left"} mb={5} fontSize={18} fontWeight={"semibold"}>Links</Text>
                        {map(header, h => (
                            <Text textAlign={"left"} cursor={"pointer"} _hover={{ color: "#008FFF" }}
                                onClick={() =>
                                    document.getElementById(h.href)?.scrollIntoView({ behavior: "smooth" })
                                }>{h.title}</Text>
                        ))}

                    </Box>
                    <Flex w={{ w: "100%", md: "25%" }} mt={{ base: 5, md: 0 }} flexDir={"column"} align={"flex-start"}>
                        <Text mb={5} fontSize={18} fontWeight={"semibold"}>Official Info:</Text>
                        <Flex align={"center"}>
                            <AiOutlineMail />
                            <Text ml={2}>pratapsinghaditya94@gmail.com</Text>
                        </Flex>
                        <Flex align="center" mt={3}>
                            <LiaPhoneVolumeSolid />
                            <Text ml={2}>+91 8077344281</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </CenterX>
        </Box>
    )
}

const IconX = ({ icon }) => {
    return (
        <Flex w={38} h={38} p={4} mr={3} align={"center"} justify={"center"} borderRadius={"50%"} bg="whiteAlpha.200" role="group" _hover={{ bg: "#008FFF" }}>
            <Flex color="whiteAlpha.600" _groupHover={{ color: "white" }}>{icon}</Flex>
        </Flex>
    )
}