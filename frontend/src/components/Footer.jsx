import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                padding: {xs: '4px', md:'10px'},
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: "rgba(121, 145, 160, 1)",
                boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.5)",
            }}
        >
            <Container>
                <Box
                    display='flex'
                    flexDirection={{ xs: 'row', md: 'row' }}
                    color="#D3D3D3"
                    gap={{ xs: '50px', md: '0px' }}
                    justifyContent={{ xs: 'flex-start', md: 'flex-start' }}
                    alignItems={{ xs: 'flex-start', md: 'center' }}

                >
                    {/* Quick Links Section */}
                    <Box item xs={12} sm={4} sx={{ mb: { xs: '0px', md: 0 }, mr: { md: '200px' } }}>
                        <Typography variant="h6" gutterBottom fontFamily='Oswald' sx={{fontSize: {xs: '15px', md: '20px'}}}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'row' }}}>
                            <Link
                                href="/"
                                color="inherit"
                                variant="body2"
                                fontFamily='Oswald'

                                sx={{ mr: {xs:'8px', md: '20px' }, mb: { xs: '0px', md: 0 }, fontSize: {xs: '10px', md: '15px'}
                                }}
                            >
                                Home
                            </Link>
                            <Link
                                href="/Registry"
                                color="inherit"
                                variant="body2"
                                fontFamily='Oswald'
                                sx={{ mr: {xs:'8px', md: '20px' }, mb: { xs: '0px', md: 0 }, fontSize: {xs: '10px', md: '15px'}}}
                            >
                                Registry
                            </Link>
                            <Link
                                href="/Contact"
                                color="inherit"
                                variant="body2"
                                fontFamily='Oswald'
                                sx={{ mr: {xs:'8px', md: '20px' }, fontSize: {xs: '10px', md: '15px'} }}
                            >
                                Contact
                            </Link>
                        </Box>
                    </Box>

                    {/* Follow Us Section */}
                    <Box item xs={12} sm={4} sx={{ mb: { xs: '0px', md: 0 }, fontSize: {xs: '10px', md: '15px'} }}>
                        <Typography variant="h6" gutterBottom fontFamily='Oswald' sx={{fontSize: {xs: '15px', md: '20px'}}}>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'row' }}}>
                            <Link
                                href="https://www.facebook.com/filip.bosilkov.33/"
                                color="inherit"
                                variant="body2"
                                fontFamily='Oswald'
                                sx={{ mr: {xs:'8px', md: '20px' }, mb: { xs: '0px', md: 0 }, fontSize: {xs: '10px', md: '15px'} }}
                            >
                                Facebook
                            </Link>
                            <Link
                                href="https://www.instagram.com/filipbosilkov212/"
                                color="inherit"
                                variant="body2"
                                fontFamily='Oswald'
                                sx={{fontSize: {xs: '10px', md: '15px'}}}
                            >
                                Instagram
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box mt={3} textAlign="center" >
                    <Typography variant="body2" color="#D3D3D3" sx={{fontSize: {xs: '10px', md: '15px'}}}>
                        &copy; {new Date().getFullYear()} Hailee And Filip. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
