import { CenterX } from "@/common/CenterX";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { map } from "lodash";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi"
import { VscThreeBars } from "react-icons/vsc"

const header = [
    { id: 1, title: "Home", href: "home" },
    { id: 2, title: "Skills", href: "skills" },
    { id: 3, title: "Experiences", href: "experiences" },
    { id: 4, title: "Projects", href: "projects" },
    { id: 5, title: "Education", href: "education" },
    { id: 5, title: "Testimonials", href: "testimonials" },
]
export const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box color="black" py={5}>
            <CenterX>
                <Box w="100%" bg="white" p={3} borderRadius={10}>
                    <Flex justify={"space-between"} align="center">
                        <Flex align={"center"}>
                            <IconButton display={{ base: "flex", xl: "none" }} onClick={onOpen} variant={"outline"} icon={<VscThreeBars />} />
                            <Heading ml={{ base: 3, xl: 0 }} size={"md"}>Aditya&apos;s Portfolio</Heading>
                        </Flex>
                        <Flex display={{ base: "none", xl: "flex" }} w={"50%"} justify={"space-between"} fontWeight={"semibold"}>
                            {map(header, head => (
                                <Box w={"fit-content"} _hover={{ color: "blue.500" }} cursor={"pointer"} role="group"
                                    onClick={() =>
                                        document.getElementById(head.href)?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    <Text>{head.title}</Text>
                                    <Flex w="0%" left="0" borderBottom={"3px solid"} borderColor={"blue.500"} borderRadius={20} transition="width 0.3s ease" _groupHover={{ width: '100%' }} />
                                </Box>
                            ))}
                        </Flex>
                        <Button size={"sm"} display={{ base: "none", sm: "flex" }} colorScheme="blue" rightIcon={<HiOutlineArrowRight />} onClick={() => window.open("https://www.linkedin.com/in/aditya-mern-full-stack-developer/")}>Let&apos;s Connect</Button>
                    </Flex>
                </Box>
                <MenuDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </CenterX>
        </Box>
    )
}

const MenuDrawer = ({ isOpen, onOpen, onClose }) => {
    const route = (href) => {
        document.getElementById(href)?.scrollIntoView({ behavior: "smooth" })
        onClose()
    }
    return (
        <Drawer placement="left" isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>Aditya&apos;s Portfolio</DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody>
                    <Box>
                        {map(header, head => (
                            <Box mt={2} w={"fit-content"} color={"blue.800"} _hover={{ color: "blue.500" }} cursor={"pointer"} role="group"
                                onClick={() => route(head.href)}
                            >
                                <Text>{head.title}</Text>
                                <Flex w="0%" left="0" borderBottom={"3px solid"} borderColor={"blue.500"} borderRadius={20} transition="width 0.3s ease" _groupHover={{ width: '100%' }} />
                            </Box>
                        ))}
                        <Button mt={5} size={"sm"} display={{ base: "flex", sm: "none" }} colorScheme="blue" rightIcon={<HiOutlineArrowRight />} onClick={() => window.open("https://www.linkedin.com/in/aditya-mern-full-stack-developer/")}>Let&apos;s Connect</Button>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}