import React, { useState } from 'react';
import Slider from 'react-slick';
import {Card, CardMedia, CardContent, Typography, Box, Button, TextareaAutosize, Link} from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cards = () => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const cards = [
        {
            title: 'About us',
            description: 'A brief story about our lives, how we met and fell in love',
            picture: './gallery/3.jpg',
            link: '/aboutus'
        },
        {
            title: 'News',
            description: 'News about the wedding organization and our visa process',
            picture: '/news.jpg',
            link: '/'
        },
        {
            title: 'Registry',
            description: 'See our wedding registry and gift ideas',
            picture: '/amazon.png',
            link: '/registry'
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('text', text);

            const res = await fetch('http://localhost:8000/submit-message/', {
                method: 'POST',
                body: formData,  // Only 'text' should be in formData
            });


            const result = await res.json();
            setResponse(result.status || result.error);
            setText(''); // Clear the textarea after sending
        } catch (error) {
            console.error('Error:', error);
            setResponse('Error sending text');
        }
    };

    return (
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' >
            <Box className="card-slider" sx={{ width: '400px', margin: '50px' }}>
                <Slider {...sliderSettings}>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <Card
                                className="card"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '100%',
                                    maxWidth: '500px',
                                    height: '500px',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    mb: 3,
                                }}
                            >
                                <a href={card.link} style={{textDecoration:'none'}}>
                               <CardMedia
                                    h
                                    component="img"
                                    height="400"
                                    image={card.picture}
                                    sx={{ objectFit: 'cover' }}
                                />

                                <CardContent sx={{ textAlign: 'center', p: 2 }}>
                                    <Typography variant="h5" sx={{ fontFamily: 'Motterdam', color:'black' }}>{card.title}</Typography>
                                    <Typography variant="body2" sx={{ fontFamily: 'WastedVidney', fontWeight: 'bold' }} color="textSecondary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                </a>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </Box>
            <Box textAlign="center" display='flex' flexDirection='column'>
                <TextareaAutosize
                    placeholder="Send us a message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                        marginTop: '80px',
                        width: '400px',
                        height: '480px',
                        padding: '10px',
                        fontSize: '16px',
                        fontFamily: 'WastedVidney',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        resize: 'none',
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{
                        marginTop: '20px',
                        backgroundColor: '#98BD42',
                        color: '#FFF',
                        fontFamily: 'Oswald, sans-serif',
                        fontWeight: 'bold',
                        padding: '10px 30px',
                        borderRadius: '50px',
                        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#06402B',
                            transform: 'translateY(-3px)',
                            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                        },
                    }}
                >
                    Send
                </Button>
                <Typography sx={{ mt: 2, minHeight: '24px', color: 'white', fontWeight: 'bold' }}>{response}</Typography>

            </Box>

        </Box>

    );
};

export default Cards;
