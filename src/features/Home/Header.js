import { CenterX } from "@/common/CenterX";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi"

export const Header = () => {
    return (
        <Box bg={"gray.50"} color="black" py={5}>
            <CenterX>
                <Box w="100%" bg="white" p={3} borderRadius={10}>
                    <Flex justify={"space-between"} align="center">
                        <Heading size={"lg"}>Aditya&apos;s Portfolio</Heading>
                        <Flex w={"40%"} justify={"space-between"} fontWeight={"semibold"}>
                            <Text>Home</Text>
                            <Text>Skills</Text>
                            <Text>Experiences</Text>
                            <Text>Projects</Text>
                            <Text>Education</Text>
                        </Flex>
                        <Button colorScheme="blue" rightIcon={<HiOutlineArrowRight />}>Let&apos;s Connect</Button>
                    </Flex>
                </Box>
            </CenterX>
        </Box>
    )
}

// Home Skills Experiences Projects Education