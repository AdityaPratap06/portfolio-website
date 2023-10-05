import { CenterX } from "@/common/CenterX";
import { Box, Button, Flex, Image, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BsDownload } from "react-icons/bs"

export const FooterTop = () => {
    const router = useRouter()
    return (
        <Box position={"relative"} bg="blue.900">
            <Image pos={"absolute"} w="100%" h="100%" src={'/hireme.jpeg'} alt="" objectFit={"cover"} opacity={.2} />
            <CenterX>
                <Flex py={20} w="100%" h="fit-content" zIndex={10} justify={"space-between"}>
                    <Flex w="50%" flexDir={"column"} color="white" align="flex-start">
                        <Text fontSize={32} fontWeight={"bold"}>Hire me</Text>
                        <Text fontSize={32} fontWeight={"bold"}>as a Front-end Developer</Text>
                        <Text fontSize={32} fontWeight={"bold"}>Great skills elite.</Text>
                    </Flex>
                    <Flex w="40%" flexDir={"column"} color="white" align="flex-start" justify={"space-between"}>
                        <VStack align={"flex-start"}>
                            <Text fontSize={16}>I&apos;m a Front-end Developer in React.Js</Text>
                            <Text fontSize={16}>with 2 Years of Experiences.</Text>
                        </VStack>
                        <Button colorScheme="blue" rightIcon={<BsDownload />} onClick={() => router.push("/Aditya-Pratap-Singh-Resume.pdf")}>Download CV</Button>
                    </Flex>
                </Flex>
            </CenterX>
        </Box>
    )
}