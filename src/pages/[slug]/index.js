import { NavBar } from "@/component/NavBar";
import { Footer } from "@/features/Home/Footer";
import { FooterBottom } from "@/features/Home/FooterBottom";
import { FooterTop } from "@/features/Home/FooterTop";
import { Header } from "@/features/Home/Header";
import { ProjectPreview } from "@/features/Project";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function Page() {

    return (
        <div>
            <Box className="scroll" h="100vh" overflowY={"scroll"}>
                <NavBar />
                <Box bg="linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(/common-bg.svg)">
                    <Header preview={true} />
                    <ProjectPreview />
                </Box>
                <FooterTop />
                <Footer />
                <FooterBottom />
            </Box>
        </div>
    );
};