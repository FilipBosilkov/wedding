import React, {useEffect} from 'react';
import Slider from 'react-slick'; // Assuming you are using react-slick for the slider
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from "axios"; // Assuming you're using Material-UI

const GalleryCard = () => {

    const [images, setImages] = React.useState([]);

    useEffect(() => {
        axios.get('https://wedding-7ib1.onrender.com/api/gallery-images')
            .then((response) => {
                const reversedImages = response.data.reverse(); // Reverse the order of the images
                setImages(reversedImages);
                console.log(reversedImages);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,          // Enable automatic transitions
        autoplaySpeed: 3000,     // Transition every 3 seconds
    };

    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Typography
                sx={{
                    fontFamily: 'Motterdam',
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: {xs: '35px',md: '60px'},
                    color: 'white',
                    marginTop: '50px'


                }}
                variant="h4"
                align="center"
            >Our Gallery</Typography>
            <Box className="gallery-slider" sx={{ width: {xs: '300px', md: '700px'}, margin: '200px', marginTop: {xs: '0px', md: '100px'},
                marginBottom: {xs: '250px', md: '200px'}}}>
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
                                    height: {xs: '300px', md: '600px'},
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingTop: { xs: '75%', md: 'unset' }, // 4:3 aspect ratio only on mobile, no padding for desktop
                                        overflow: { xs: 'hidden', md: 'unset' }, // Restrict overflow only on mobile
                                        backgroundColor: { xs: '#f0f0f0', md: 'transparent' }, // Optional placeholder for mobile
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={image.image}
                                        sx={{
                                            position: { xs: 'absolute', md: 'relative' }, // Absolute positioning for mobile, normal for desktop
                                            top: { xs: '50%', md: 'unset' },
                                            left: { xs: '50%', md: 'unset' },
                                            width: { xs: '100%', md: 'auto' },
                                            height: { xs: '100%', md: 'auto' },
                                            transform: { xs: 'translate(-50%, -50%)', md: 'none' }, // Centering for mobile only
                                            objectFit: { xs: 'contain', md: 'cover' }, // Contain on mobile, cover on desktop
                                        }}
                                    />
                                </Box>


                                <CardContent
                                    sx={{
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        margin: 'auto',
                                        padding: '1px'
                                    }}
                                >
                                    <Typography sx={{ fontFamily: 'WastedVidney', padding: '2px' }}>
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
