import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import axios from "axios";

const GalleryCard = () => {
    const [images, setImages] = React.useState([]);

    useEffect(() => {
        axios.get('https://wedding-7ib1.onrender.com/api/gallery-images')
            .then((response) => {
                const reversedImages = response.data.reverse();
                setImages(reversedImages);
                console.log(reversedImages);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: isDesktop,         // Show arrows only on desktop
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Typography
                sx={{
                    fontFamily: 'Motterdam',
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: { xs: '35px', md: '60px' },
                    color: 'white',
                    marginTop: '50px',
                    marginBottom: '20px'
                }}
                variant="h4"
                align="center"
            >
                Our Gallery
            </Typography>
            <Box
                className="gallery-slider"
                sx={{
                    width: { xs: '90%', md: '700px' },
                    mt: { xs: '20px', md: '100px' },
                    mb: { xs: '50px', md: '200px' },
                }}
            >
                <Slider {...sliderSettings}>
                    {images.map((image) => (
                        <div key={image.title}>
                            <Card
                                className="card"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '100%',
                                    maxWidth: '700px',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    mb: 3,
                                    height: 'auto'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={image.image}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain',
                                    }}
                                />
                                <CardContent
                                    sx={{
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        margin: 'auto',
                                        padding: '1px'
                                    }}
                                >
                                    <Typography
                                        sx={{ fontFamily: 'WastedVidney', padding: '2px', color: 'white' }}
                                    >
                                        {image.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}

export default GalleryCard;
