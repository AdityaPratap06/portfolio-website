import { CenterX } from "@/common/CenterX";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { map } from "lodash";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi"

export const Header = () => {

    const header = [
        { id: 1, title: "Home", href: "home" },
        { id: 2, title: "Skills", href: "skills" },
        { id: 3, title: "Experiences", href: "experiences" },
        { id: 4, title: "Projects", href: "projects" },
        { id: 5, title: "Education", href: "education" },
        { id: 5, title: "Testimonials", href: "testimonials" },
    ]

    return (
        <Box color="black" py={5}>
            <CenterX>
                <Box w="100%" bg="white" p={3} borderRadius={10}>
                    <Flex justify={"space-between"} align="center">
                        <Heading size={"md"}>Aditya&apos;s Portfolio</Heading>
                        <Flex w={"50%"} justify={"space-between"} fontWeight={"semibold"}>
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
                        <Button colorScheme="blue" rightIcon={<HiOutlineArrowRight />}>Let&apos;s Connect</Button>
                    </Flex>
                </Box>
            </CenterX>
        </Box>
    )
}

// Home Skills Experiences Projects Education