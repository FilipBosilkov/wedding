import React from 'react';
import Button from '@mui/material/Button';

const CircularButton = ({ imageUrl, linkUrl }) => {
    return (
        <Button
            onClick={() => window.open(linkUrl, '_blank')}
            sx={{
                position: 'relative',               // Position button for overlay
                backgroundImage: `url(${imageUrl})`, // Use the imageUrl prop
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                 boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)',
                minWidth: "70px",
                minHeight: "70px",
                cursor: "pointer",
                marginTop: "30px",
                alignSelf: "center",
                overflow: "hidden",                 // Clip the overlay within the circular shape
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",            // Keep overlay circular
                    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent by default
                    transition: "background-color 0.3s ease",
                },
                "&:hover::after": {
                    backgroundColor: "rgba(0, 0, 0, 0.2)", // Light overlay on hover
                },
                "&:active::after": {
                    backgroundColor: "rgba(0, 0, 0, 0.4)", // Darker overlay on click
                },
            }}
        />
    );
};

export default CircularButton;
