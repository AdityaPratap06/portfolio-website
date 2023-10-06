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
                <Flex py={20} w="100%" flexDir={{ base: "column", md: "row" }} h="fit-content" zIndex={10} justify={"space-between"}>
                    <Flex w={{ base: "100%", md: "50%" }} flexDir={"column"} color="white" align="flex-start">
                        <Text textAlign={"left"} fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"bold"}>Hire me</Text>
                        <Text textAlign={"left"} fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"bold"}>as a Front-end Developer</Text>
                        <Text textAlign={"left"} fontSize={{ base: 24, md: 24, lg: 30, xl: 36 }} fontWeight={"bold"}>Great skills elite.</Text>
                    </Flex>
                    <Flex w={{ base: "100%", md: "50%", lg: "40%" }} mt={{ base: 5, md: 0 }} flexDir={"column"} color="white" align="flex-start" justify={"space-between"}>
                        <VStack align={"flex-start"}>
                            <Text textAlign={"left"} fontSize={16}>I&apos;m a Front-end Developer in React.Js</Text>
                            <Text textAlign={"left"} fontSize={16}>with 2 Years of Experiences.</Text>
                        </VStack>
                        <Button mt={{ base: 5, md: 0 }} colorScheme="blue" rightIcon={<BsDownload />} onClick={() => router.push("/Aditya-Pratap-Singh-Resume.pdf")}>Download CV</Button>
                    </Flex>
                </Flex>
            </CenterX>
        </Box>
    )
}