// import { CenterX } from "@/common/CenterX"
// import { Avatar, Box, Text } from "@chakra-ui/react"
// import Carousel from "react-multi-carousel"
// import 'react-multi-carousel/lib/styles.css';

// export const Testimonial = () => {
//     const testimonials = [
//         {
//             id: 1,
//             image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//             text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
//             name: "Manish Rajput",
//             Designation: "Front-end Developer"
//         },
//         {
//             id: 2,
//             image: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
//             text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
//             name: "Manish Rajput",
//             Designation: "Front-end Developer"
//         },
//         {
//             id: 1,
//             image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//             text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
//             name: "Manish Rajput",
//             Designation: "Front-end Developer"
//         },
//         {
//             id: 2,
//             image: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
//             text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
//             name: "Manish Rajput",
//             Designation: "Front-end Developer"
//         },
//         {
//             id: 1,
//             image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//             text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
//             name: "Manish Rajput",
//             Designation: "Front-end Developer"
//         },
//         {
//             id: 2,
//             image: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
//             text: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.",
//             name: "Manish Rajput",
//             Designation: "Front-end Developer"
//         },
//     ]
//     return (
//         <Box>
//             <CenterX>
//                 <Carousel>
//                     {map(testimonials, testimonial => (
//                         <Box>
//                             <Box>
//                                 <Avatar src={testimonial.image} />
//                                 <Text>{testimonial.text}</Text>

//                             </Box>
//                         </Box>
//                     ))}
//                 </Carousel>
//             </CenterX>
//         </Box>
//     )
// }