import {Box, Typography} from "@mui/material";
import React, {forwardRef} from "react";

const Summary = forwardRef((props, ref) => {
    return (
        <Box ref={ref} display='flex' flexDirection='column' alight='center' textAlign='center' margin='200px' marginBottom='200px' marginTop='100px' color='white' sx={{textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)"}}>
            <Typography variant="h3" align="center" gutterBottom fontFamily='Motterdam' >
                Wedding Details
            </Typography>
            <Typography variant="body3" align="justify" marginBottom='20px' fontFamily='WastedVidney' fontSize='20px' fontWeight='Bold'
                            sx={{textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)"}}>
                Thank you for visiting our wedding page. The wedding details as of right now are still quite muddy. We are waiting on Filip's visa interview, which will be the deciding factor of when the wedding would be celebrated.
            </Typography>
            <Typography variant="body3" align="justify" fontFamily='WastedVidney' fontSize='20px'  fontWeight='Bold' sx={{textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)"}}>
                We remain optimistic though, and we are hoping that in the likely scenario that he gets his visa within the next few months, we would have enough time to organize, and hold the wedding on July 5th, 2025. The moment we have more details, the guests will be accordingly informed, and this page will be updated. The wedding invitations will have the same details you will find on this page.
            </Typography>
        </Box>
    );
});

export default Summary;