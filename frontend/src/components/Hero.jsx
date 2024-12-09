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
            marginBottom="10px"
            color="white"
        >
            <Typography
                sx={{
                    fontFamily: "Motterdam",
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: {xs: '25px', md: '50px'},
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
                    maxWidth: {xs: '300px', md: '600px'}, // Responsive max width
                    height: 'auto', // Maintain aspect ratio
                    paddingBottom: '0px',
                    marginBottom: '50px',
                }}
            >
                <img
                    src="/static/website_title2.png"
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
                    padding: "0",
                    marginBottom: "50px",
                    height: "50px",
                    display: 'flex', // Center and handle layout
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: { xs: '150', md: '300px' },
                }}
            >
                <Box
                    component="img"
                    src="/static/clickhere.png"
                    alt="Click here for wedding details!"
                    sx={{
                        position: "relative",
                        maxWidth: { xs: '200px', md: '500px' }, // Responsive width
                        maxHeight: { xs: '150px', md: '400px' }, // Responsive height
                        marginLeft: { xs: '180px', md: '500px' }, // Remove margin on mobile
                        bottom: { xs: '90px', md: '300px' }, // Remove positioning on mobile
                    }}
                />
            </Box>

        </Box>
    );
};

export default Hero;
