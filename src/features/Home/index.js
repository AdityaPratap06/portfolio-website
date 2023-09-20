import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { Skills } from "./Skills";

export const Home = () => {
    return (
        <Box>
            <Header />
            <Intro />
            <Skills />
        </Box>
    )
}

// Home Skills Experiences Projects Education