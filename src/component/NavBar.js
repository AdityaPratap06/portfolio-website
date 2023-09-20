import { CenterX } from "@/common/CenterX";
import { Box, Flex, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { LiaPhoneVolumeSolid } from "react-icons/lia"
import React from "react";

export const NavBar = () => {
    return (
        <Box bg={"black"}>
            <Flex justify={"space-between"} py={2} px={5}>
                <HStack spacing={10} color="white">
                    <Flex align="center">
                        <AiOutlineMail color="blue.500" />
                        <Text ml={2}>pratapsinghaditya94@gmail.com</Text>
                    </Flex>
                    <Flex align="center">
                        <LiaPhoneVolumeSolid />
                        <Text ml={2}>+91 8077344281</Text>
                    </Flex>
                </HStack>
                <HStack>
                    <IconX bg={"blue.600"} icon={<AiFillLinkedin />} />
                    <IconX bg={"blue.600"} icon={<FaFacebookF />} />
                    <IconX bg={"blue.600"} icon={<AiFillGithub />} />
                    <IconX bg={"blue.600"} icon={<AiOutlineInstagram />} />
                </HStack>
            </Flex >
        </Box>
    )
}

const IconX = ({ icon }) => {
    return (
        <Flex w={30} h={30} border={"3px solid"} bg="white" borderRadius={100} borderColor={"gray.200"} align="center" position="relative" justify="center" role="group" overflow={"hidden"}>
            <Flex position="absolute" w={"100%"} zIndex={1} h={"0"} bottom={0} _groupHover={{ h: "100%", bg: "blue", transition: "height .3s linear" }} />
            <Flex position="relative" color="#262626" zIndex={9} transition='all 0.5s' _groupHover={{ color: "#fff", transform: "rotateY(360deg)" }}>
                {icon}
            </Flex>
        </Flex>
    )
}