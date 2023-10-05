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
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
            name: "Manish Rajput",
            designation: "Front-end Developer"
        },
        {
            id: 2,
            image: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
            text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
            name: "Manish Rajput",
            designation: "Front-end Developer"
        },
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
            name: "Manish Rajput",
            designation: "Front-end Developer"
        },
        {
            id: 2,
            image: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
            text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
            name: "Manish Rajput",
            designation: "Front-end Developer"
        },
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
            name: "Manish Rajput",
            designation: "Front-end Developer"
        },
        {
            id: 2,
            image: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
            text: " tdably, many of them might be skeptical or hesitant to trust you right away.",
            name: "Manish Rajput",
            designation: "Front-end Developer"
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
                <Box py={20} zIndex={1}>
                    <Flex justify={"center"} fontSize={30} fontWeight={"bold"}>
                        <Text px={2} borderBottom={"3px solid"}>Testimonials</Text>
                    </Flex>
                    <Box w="70vw" pt={10}>
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
                                            <Image position={"absolute"} border="4px solid" borderColor={"gray.50"} m={1} borderRadius={50} w={100} h={100} zIndex={2} alt={""} src={testimonial.image} />
                                        </Box>
                                        <Flex flexDir={"column"} bg="white" p={3} pt={16} h="75%" justify="space-between" borderRadius={10}>
                                            <Flex h="fit-content" align={"center"}>
                                                <Box h="100%">
                                                    <FaQuoteLeft />
                                                </Box>
                                                <Text w="100%"
                                                    justify="align"
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
                                            <Box bg="white" py={5}>
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