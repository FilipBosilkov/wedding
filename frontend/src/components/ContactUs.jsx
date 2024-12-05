import React from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <Box margin='30px'>
            <Typography
                sx={{
                    fontFamily: 'Motterdam',
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: '50px',
                    color: 'white'
                }}
                variant="h4"
                align="center"


            >Contact Us
            </Typography>

            <Box
                sx={{
                    marginTop: '80px',
                    marginLeft: '250px',
                    marginRight: '250px',
                    marginBottom: '200px',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontFamily: 'Oswald',
                    color: 'white'
                }}
            >
                <Typography
                    variant="body3"
                    align="justify"
                    fontFamily="WastedVidney"
                    fontSize="20px"
                    sx={{ textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)", color: 'white', fontWeight: 'bold' }}
                >
                    Reach us through these options:
                </Typography>

                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" margin="70px">
                    <Box sx={{ marginRight: '85px' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100px',

                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px',
                                mb: 3,
                                backgroundColor: 'rgba(150,200,255,1)'
                            }}
                        >
                            <CardMedia></CardMedia>

                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 2, // Adjust spacing between items
                                }}
                            >
                                Filip
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
                    </Box>

                    <Box>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100px',

                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px',
                                mb: 3,
                                backgroundColor: 'rgba(255,150,200,1)'
                            }}
                        >
                            <CardMedia></CardMedia>

                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 2, // Adjust spacing between items
                                }}
                            >
                                Hailee

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

        </Box>
    );
}

export default ContactUs;