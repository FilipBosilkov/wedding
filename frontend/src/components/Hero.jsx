import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = ({ scrollToDetails }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="20px"
            marginTop="30px"
            marginBottom={{xs: "25px", md: '0px'}}
            color="white"
        >
            <Typography
                sx={{
                    fontFamily: "Motterdam",
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: {xs: '40px', md: '50px'},
                }}
                variant="h4"
                align="center"
            >
                Welcome To
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%', // Full width of the container
                    maxWidth: {xs: '500px', md: '600px'}, // Responsive max width
                    height: 'auto', // Maintain aspect ratio
                    paddingBottom: '0px',
                    marginBottom: '0px',
                }}
            >
                <img
                    src="/static/title.png"
                    alt="Website Title"
                    style={{
                        width: '100%', // Fill the container's width
                        height: 'auto', // Maintain aspect ratio
                    }}
                />
            </Box>


            <Box
                component="button"
                onClick={scrollToDetails}
                sx={{
                    marginTop: {xs: '0px', md: '150px'},
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: "0px",
                    marginBottom: "0px",
                    height: "50px",
                    display: 'flex', // Center and handle layout
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: { xs: '0px', md: '300px' },
                }}
            >
                <Box
                    component="img"
                    src="/static/clickhere.png"
                    alt="Click here for wedding details!"
                    sx={{
                        position: "relative",
                        maxWidth: { xs: '250px', md: '500px' }, // Responsive width
                        maxHeight: { xs: '300px', md: '400px' }, // Responsive height
                        marginLeft: { xs: '170px', md: '500px' }, // Remove margin on mobile
                        bottom: { xs: '50px', md: '250px' }, // Remove positioning on mobile
                        marginBottom: "0px",

                    }}
                />
            </Box>

        </Box>
    );
};

export default Hero;
