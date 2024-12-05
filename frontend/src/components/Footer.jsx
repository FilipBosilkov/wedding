import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: "rgba(121, 145, 160, 1)",
                boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.5)",


            }}
        >
            <Container >
                <Box display='flex' flexDirection='row' color="#D3D3D3">
                    {/* First Column */}

                    {/* Second Column */}
                    <Box item xs={12} sm={4} >
                        <Typography variant="h6" gutterBottom fontFamily='Oswald'  marginRight='200px'>
                            Quick Links
                        </Typography>
                        <Link href="/" color="inherit" variant="body2" fontFamily='Oswald' marginRight='20px'>
                            Home
                        </Link>
                        <Link href="/Registry" color="inherit" variant="body2" fontFamily='Oswald ' marginRight='20px'>
                            Registry
                        </Link>
                        <Link href="/Contact" color="inherit" variant="body2" fontFamily='Oswald' marginRight='20px'>
                            Contact
                        </Link>
                    </Box>

                    {/* Third Column */}
                    <Box item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom fontFamily='Oswald'>
                            Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/filip.bosilkov.33/" color="inherit" variant="body2" fontFamily='Oswald' marginRight='20px'>
                            Facebook
                        </Link>
                        <Link href="https://www.instagram.com/filipbosilkov212/" color="inherit" variant="body2" fontFamily='Oswald'>
                            Instagram
                        </Link>

                    </Box>
                </Box>
                <Box mt={3} textAlign="center" >
                    <Typography variant="body2" color="#D3D3D3">
                        &copy; {new Date().getFullYear()} Hailee And Filip. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
