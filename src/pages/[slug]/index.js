import { NavBar } from "@/component/NavBar";
import { ProjectPreview } from "@/features/Project";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function Page() {

    return (
        <div>
            <Box className="scroll" h="100vh" overflowY={"scroll"}>
                <NavBar />
                <ProjectPreview />
            </Box>
        </div>
    );
};