import { CenterX } from "@/common/CenterX";
import { Box, Image } from "@chakra-ui/react";
import { map } from "lodash";
import { useRouter } from "next/router";
import React from "react";

export const ProjectPreview = () => {
    const { query } = useRouter()

    const coachinglog = [
        { id: 1, url: "cl-dashboard.png" },
        { id: 2, url: "cl-search.png" },
        { id: 3, url: "cl-admission.png" },
        { id: 4, url: "cl-demo.png" },
        { id: 5, url: "cl-followup.png" },
        { id: 6, url: "cl-inventory.png" },
        { id: 7, url: "cl-test-result.png" },
    ]

    const newsFeed = [
        { id: 1, url: "news-main.png" },
        { id: 2, url: "news-post-feed.png" },
        { id: 3, url: "news-create-post.png" },
        { id: 4, url: "news-upload-image.png" },
        { id: 5, url: "news-post.png" },
        { id: 6, url: "news-comment.png" },
    ]
    return (
        <Box>
            <CenterX>
                <Box>
                    {map((query.slug === "coaching-log" ? coachinglog : newsFeed), img => (
                        img.url ?
                            <Image mt={5} border={"1px solid"} borderColor={"gray.200"} borderRadius={10} src={img.url} alt="" />
                            :
                            null
                    ))}
                </Box>
            </CenterX>
        </Box>
    )
}