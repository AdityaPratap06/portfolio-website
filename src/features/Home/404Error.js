import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const Error404 = () => {
    const router = useRouter()
    return (
        <Box>
            <Box align="center" pt={14} pb={20}>
                <Text fontSize={36} fontWeight={"bold"}>404 Error</Text>
                <Breadcrumb mt={4} w="fit-content" spacing='8px' fontWeight={"semibold"} separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>404 Error</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box bg="white" align="center" py={20}>
                <Image src="/error404.png" alt="Error404" />
                <Text my={5} fontSize={42} fontWeight={"bold"}>Oops! Page Not Found</Text>
                <Button colorScheme="blue" onClick={() => router.push("/")}>Back to Home <ArrowForwardIcon /></Button>
            </Box>
        </Box>
    )
}