import React, {useEffect} from 'react';
import Slider from 'react-slick'; // Assuming you are using react-slick for the slider
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from "axios"; // Assuming you're using Material-UI

const GalleryCard = () => {

    const [images, setImages] = React.useState([]);

    useEffect(() => {
        axios.get('https://wedding-7ib1.onrender.com/api/gallery-images').then((response) => {
            setImages(response.data);
            console.log(response.data);

        }).catch(error => { console.log(error); });
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
                    marginTop: '30px'


                }}
                variant="h4"
                align="center"
            >Our Gallery</Typography>
            <Box className="gallery-slider" sx={{ width: {xs: '300px', md: '700px'}, margin: '200px', marginTop: {xs: '0px', md: '100px'} }}>
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
                                    height: '600px',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    mb: 3,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={image.image}
                                    sx={{
                                        objectFit: { xs: 'contain', md: 'cover' }, // Use 'contain' for mobile and 'cover' for larger devices
                                        objectPosition: 'center',
                                        width: '100%',
                                        height: { xs: '300px', md: '500px' } // Adjust height for mobile devices
                                    }}
                                />

                                <CardContent
                                    sx={{
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        margin: 'auto',
                                        height: { xs: '10%', md: 'auto' }, // Reduce height to 10% of its current size on mobile
                                    }}
                                >
                                    <Typography sx={{ fontFamily: 'WastedVidney' }}>
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
