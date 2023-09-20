import { NavBar } from "@/component/NavBar"
import { Home } from "@/features/Home"
import { Box } from "@chakra-ui/react"
import React from "react"

export default function Page() {
    return (
        <Box className="scroll" h="100vh" overflowY={"scroll"}>
            <NavBar />
            <Home />
        </Box>
    )
}