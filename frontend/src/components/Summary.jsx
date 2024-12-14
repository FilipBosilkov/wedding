import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";

const Summary = forwardRef((props, ref) => {
    return (
        <Box
            ref={ref}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            sx={{
                margin: { xs: '10px', md: '200px' }, // Adjust margins for mobile and desktop
                marginBottom: { xs: '40px', md: '200px' },
                marginTop: { xs: '40px', md: '100px' },
                color: 'white',
                textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)"
            }}
        >
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                    fontFamily: 'Motterdam',
                    fontSize: { xs: '30px', md: '36px' }, // Responsive font size
                }}
            >
                Wedding Details
            </Typography>
            <Typography
                variant="body1" // Changed to a standard Material-UI variant
                align="justify"
                sx={{
                    marginBottom: '0px',
                    fontFamily: 'WastedVidney',
                    fontSize: { xs: '12px', md: '20px' }, // Smaller font for mobile
                    fontWeight: 'bold',
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    padding: { xs: '10px', md: '0' }, // Add padding for mobile readability
                }}
            >
                Thank you for visiting our wedding page! Everything has gone according to plan! Filip had his visa approved, and is going to be soon reunited with Hailee!
            </Typography>
            <Typography
                variant="body1"
                align="justify"
                sx={{
                    fontFamily: 'WastedVidney',
                    fontSize: { xs: '12px', md: '20px' }, // Smaller font for mobile
                    fontWeight: 'bold',
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    padding: { xs: '10px', md: '0' }, // Add padding for mobile readability
                }}
            >
                The wedding is going to be officially held on Saturday, July 5th, 2025. The location of the wedding is 1405 Palomino St. Minot, North Dakota, 58703.
                For RSVP, you can do it through mail, or electronically using our website. For any questions please feel free to contact us!
            </Typography>
        </Box>
    );
});

export default Summary;
