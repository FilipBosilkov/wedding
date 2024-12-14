import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

// Slider related imports
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RegistryCards = () => {
    const [items, setItems] = React.useState([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        axios.get('https://wedding-7ib1.onrender.com/api/registry-items')
            .then((response) => {
                setItems(response.data);
            })
            .catch(error => { console.log(error); });
    }, []);

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

    // Mobile layout: Slider
    if (isMobile) {
        return (
            <Box
                className="card-slider"
                sx={{
                    order: { xs: 1, md: 0 },
                    width: { xs: '280px', md: '400px' },
                    margin: { xs: '0 auto', md: '50px' },
                    maxWidth: '800px',
                    marginBottom: '400px'
                }}
            >
                <Slider {...sliderSettings}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <Card
                                className="card"
                                sx={{
                                    display: 'flex',
                                    marginBottom: '0px',
                                    marginTop: '23px',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: { xs: 'auto', md: '583px' },
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    mb: 3,
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <a href={item.url} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={item.picture}
                                        sx={{
                                            objectFit: 'cover',
                                            height: { xs: '250px', md: '480px' },
                                            width: '100%',
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            textAlign: 'center',
                                            p: { xs: 1, md: 2 },
                                            height: { xs: '50px' },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{ fontFamily: 'Motterdam', color: 'black' }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: 'WastedVidney',
                                                fontWeight: 'bold',
                                            }}
                                            color="textSecondary"
                                        >
                                            {item.price} $
                                        </Typography>
                                    </CardContent>
                                </a>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </Box>
        );
    }

    // Desktop layout: Original grid
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            sx={{ padding: '20px', marginBottom: '200px' }}
        >
            {items.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '45%',
                            md: '20%'
                        },
                        margin: '50px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-10px)',
                            '& .MuiCard-root': {
                                boxShadow: '2px 8px 20px rgba(0, 0, 0, 0.2)',
                                transition: 'box-shadow 0.3s ease-in-out'
                            }
                        }
                    }}
                >
                    <Card
                        sx={{
                            border: '1px solid black',
                            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)',
                            borderRadius: '15px',
                            transition: 'box-shadow 0.3s ease-in-out',
                            backgroundColor: 'white',
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <a href={item.url} style={{ textDecoration: 'none' }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={item.picture}
                                sx={{
                                    width: "100%",
                                    objectFit: "contain"
                                }}
                            />
                            <CardContent sx={{ backgroundColor: 'transparent' }}>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{ fontFamily: 'Oswald' }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ fontFamily: 'Oswald' }}
                                >
                                    {item.price} $
                                </Typography>
                            </CardContent>
                        </a>
                    </Card>
                </Box>
            ))}
        </Box>
    );
};

export default RegistryCards;
