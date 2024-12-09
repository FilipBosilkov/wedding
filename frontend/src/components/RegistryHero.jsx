import {Box, Typography} from "@mui/material";
import React from "react";
import CircularButton from "./CircularButton";

const RegistryHero = () => {
    return (
        <Box display='flex' flexDirection='column' textAlign='center' justifyContent='center' >
            <Typography
                sx={{
                    fontFamily: 'Oswald',
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: '30px',
                    color: 'white',
                    marginTop: '30px'

                }}
                variant="h4"
                align="center"
            >Check out our Amazon Registry here:
            </Typography>
                <CircularButton
                imageUrl="/static/amazon.png"
                linkUrl="https://www.amazon.com/wedding/registry/ODKD2NVV63EC"/>

            <Typography
                sx={{
                    fontFamily: 'Oswald',
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: '30px',
                    color: 'white',
                    marginTop: '30px'
                }}
                variant="h4"
                align="center"
            >

                Or our Anthropologie Registry here:
            </Typography>

            <CircularButton
                imageUrl="/static/antropologie.jpg"
                linkUrl="https://www.anthropologie.com/registry/listing?registryId=9757F7DC3D64"/>

            <Typography
                sx={{
                    fontFamily: 'Motterdam',
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: '60px',
                    color: 'white',
                    marginTop: '90px'


                }}
                variant="h4"
                align="center"
            >Our Top Picks</Typography>
        </Box>
    );
}

export default RegistryHero;