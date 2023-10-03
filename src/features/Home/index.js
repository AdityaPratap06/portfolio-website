import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { Skills } from "./Skills";

export const Home = () => {
    return (
        <Box>
            <Box bg="linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(/common-bg.svg)">
                <Header />
                <Intro />
            </Box>
            <Skills />
        </Box>
    )
}

// Home Skills Experiences Projects Education