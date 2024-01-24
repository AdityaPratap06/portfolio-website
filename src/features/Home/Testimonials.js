import { CenterX } from "@/common/CenterX"
import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import { map } from "lodash"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            image: "",
            text: "Aditya Pratap Singh's sports betting website is a game-changer! The sleek design and user-friendly interface make betting a breeze. The live betting feature adds excitement, while fast loading times ensure a seamless experience. Trustworthy and secure, this platform is a winner. Kudos to Aditya for creating a site that truly elevates the sports betting experience!",
            name: "Samrat Singh Tanwar",
            designation: "Mobile Engineer"
        },
        {
            id: 2,
            image: "",
            text: "Exceptional service! The website created surpassed my expectations. The design is modern, user-friendly, and perfectly represents my brand. The attention to detail and prompt communication made the entire process seamless. I highly recommend their expertise for anyone seeking a professional and visually stunning website. Truly satisfied with the results!",
            name: "Kritika Gupta",
            designation: ""
        },
        {
            id: 2,
            image: "",
            text: "I can't express how pleased I am with my new website! It's like they read my mind and brought my vision to life. The design is not only visually stunning but also super easy to navigate. Working together was a breeze, and the end result exceeded all my expectations. Highly recommend for anyone looking to up their online game!",
            name: "Rupak Chauhan",
            designation: ""
        },
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };
    return (
        <Box id={"testimonials"} position={"relative"}>
            <Image pos={"absolute"} w="100%" h="100%" src={'/testimonialbg.jpg'} alt="Work Experience" objectFit={"cover"} opacity={0.4} />
            <CenterX>
                <Box w="100%" py={20} zIndex={1}>
                    <Flex justify={"center"} fontSize={30} fontWeight={"bold"}>
                        <Text px={2} borderBottom={"3px solid"}>Testimonials</Text>
                    </Flex>
                    <Box pt={10} align={"center"}>
                        <Carousel
                            responsive={responsive}
                            draggable={true}
                            showDots={true}
                            infinite={true}
                            autoPlay={true}
                            arrows={false}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                        >
                            {map(testimonials, testimonial => (
                                <Box mx={3} mb={10} h="100%" >
                                    <Box w="100%" h="100%">
                                        <Box position={"relative"} w={110} h={55}>
                                            <Image loading={"lazy"} position={"absolute"} border="4px solid" borderColor={"gray.50"} m={1} borderRadius={50} w={100} h={100} zIndex={2} alt={""} src={testimonial.image? testimonial.image: "/user-img.png"} />
                                        </Box>
                                        <Flex flexDir={"column"} bg="white" p={3} pt={16} h="85%" justify="space-between" borderRadius={10}>
                                            <Flex h="fit-content" align={"center"}>
                                                <Box h="100%">
                                                    <FaQuoteLeft />
                                                </Box>
                                                <Text w="100%" px={2}
                                                    textAlign={"justify"}
                                                    sx={{
                                                        "word-wrap": "break-word",
                                                        "white-space": "pre-wrap",
                                                    }}
                                                >
                                                    {testimonial.text}
                                                </Text>
                                                <Flex h="100%" flexDir={"column"} justify="end">
                                                    <FaQuoteRight />
                                                </Flex>
                                            </Flex>
                                            <Box bg="white" py={5} h={90}>
                                                <Text fontSize={20} fontWeight={"semibold"}>{testimonial.name}</Text>
                                                <Text fontSize={14} color={"gray.500"}>{testimonial.designation}</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                </Box>
            </CenterX>
        </Box>
    )
}