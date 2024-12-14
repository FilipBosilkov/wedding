import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useTheme, useMediaQuery } from "@mui/material";
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {

    return (
        <Box margin={{ xs: '10px', sm: '20px', md: '30px' }}>
            <Typography
                sx={{
                    fontFamily: 'Motterdam',
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    marginTop: '50px',
                    fontSize: { xs: '30px', md: '50px' },
                    color: 'white'
                }}
                variant="h4"
                align="center"
            >
                Contact Us
            </Typography>

            <Box
                sx={{
                    marginTop: { xs: '40px', md: '80px' },
                    marginX: { xs: '20px', sm: '50px', md: '250px' },
                    marginBottom: { xs: '100px', md: '200px' },
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontFamily: 'Oswald',
                    color: 'white'
                }}
            >
                <Typography
                    variant="body1"
                    align="center"
                    fontFamily="WastedVidney"
                    fontSize={{ xs: '16px', md: '20px' }}
                    sx={{
                        textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                >
                    Reach us through these options:
                </Typography>

                <Box
                    display="flex"
                    flexDirection={{ xs: 'row', sm: 'row' }}
                    alignItems="center"
                    justifyContent="center"
                    margin={{ xs: '40px auto', sm: '70px' }}
                    gap={{ xs: 4, sm: 8 }}
                >
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: { xs: '180px', sm: '120px', md: '100px' },
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            mb: 3,
                            backgroundColor: 'rgba(150,200,255,1)',
                            padding: 2
                        }}
                    >
                        <CardMedia></CardMedia>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ fontFamily:'Motterdam',
                            fontSize: '32px'}}>Filip</Typography>
                            <a href="https://www.instagram.com/filipbosilkov212/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://www.facebook.com/filip.bosilkov.33/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                            <a href="mailto:filip.bosilkov@outlook.com">
                                <FaEnvelope size={30} />
                            </a>
                            <a href="tel:+17014412323">
                                <FaPhone size={30} />
                            </a>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: { xs: '180px', sm: '120px', md: '100px' },
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            mb: 3,
                            backgroundColor: 'rgba(255,150,200,1)',
                            padding: 2

                        }}
                    >
                        <CardMedia></CardMedia>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ fontFamily:'Motterdam',
                                fontSize: '32px'}}>Hailee</Typography>
                            <a href="https://www.instagram.com/hailee_iscrying/" target="_blank"
                               rel="noopener noreferrer">
                                <FaInstagram size={30}/>
                            </a>
                            <a href="https://www.facebook.com/hailee.crocker.54" target="_blank"
                               rel="noopener noreferrer">
                                <FaFacebook size={30}/>
                            </a>
                            <a href="mailto:h.rose010724@gmail.com">
                                <FaEnvelope size={30}/>
                            </a>
                            <a href="tel:+17014412323">
                                <FaPhone size={30}/>
                            </a>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactUs;
