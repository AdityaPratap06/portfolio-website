import { NavBar } from "@/component/NavBar"
import { Home } from "@/features/Home"
import { Box } from "@chakra-ui/react"
import React, { useEffect } from "react"

const HomePage = () => {
    useEffect(() => {
        const socket = new WebSocket('ws://mywebsocketserver.com/chat'); //ws://localhost:3000/socket
        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <Box className="scroll" h="100vh" overflowY={"scroll"}>
                <NavBar />
                <Home />
            </Box>
        </div>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            headers: {
                'Cache-Control': 'public, max-age=3600',
            },
        }
    };
}

export default HomePage;