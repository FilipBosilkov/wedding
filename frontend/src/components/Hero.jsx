import {Box, Typography} from "@mui/material";
import React, from "react";

const Hero = ({scrollToDetails}) => {


    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' margin='50px'
             marginTop='30px' marginBottom='10px'
             color='white'>


            <Typography
                sx={{
                    fontFamily: 'Motterdam',
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: '50px',
                }}
                variant="h4"
                align="center"


            >Welcome To
            </Typography>

            <img style={{
                position: "relative",
                maxWidth: '600px',
                maxHeight: '500px',
                paddingBottom: '0px',
                marginBottom: '50px',
            }} src='/website_title2.png' alt="Click here for wedding details!"/>


            <a
                onClick={scrollToDetails}
                style={{
                    cursor: 'pointer',
                    paddingBottom: '0px',
                    marginBottom: '50px',
                    height: '50px',
                    border: 'none',
                    background: 'none' // Removes default button styling
                }}
                role="button" // Ensures accessibility
            >
                <img style={{
                    position: "relative",
                    maxWidth: '500px',
                    maxHeight: '400px',
                    marginLeft: '500px',
                    bottom: '300px'
                }}
                     src='/clickhere.png'
                     alt="Click here for wedding details!"
                />
            </a>


        </Box>
    );
}

export default Hero;