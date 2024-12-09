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
                marginBottom: { xs: '50px', md: '200px' },
                marginTop: { xs: '20px', md: '100px' },
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
                Thank you for visiting our wedding page. The wedding details as of right now are still quite muddy. We are waiting on Filip's visa interview, which will be the deciding factor of when the wedding would be celebrated.
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
                We remain optimistic though, and we are hoping that in the likely scenario that he gets his visa within the next few months, we would have enough time to organize, and hold the wedding on July 5th, 2025. The moment we have more details, the guests will be accordingly informed, and this page will be updated. The wedding invitations will have the same details you will find on this page.
            </Typography>
        </Box>
    );
});

export default Summary;
