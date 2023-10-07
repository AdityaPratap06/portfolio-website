import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { Skills } from "./Skills";
import { Testimonials } from "./Testimonials";
import { Experiences } from "./Experiences";
import { Education } from "./Education";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";
import { Footer } from "./Footer";

export const Home = () => {
    return (
        <Box id={"home"}>
            <Box bg="linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(/common-bg.svg)">
                <Header />
                <Intro />
            </Box>
            <Skills />
            <Experiences />
            <Education />
            <Testimonials />
            <FooterTop />
            <Footer />
            <FooterBottom />
        </Box>
    )
}

// Home Skills Experiences Projects Education