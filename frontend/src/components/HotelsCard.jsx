import React from 'react';
import Slider from 'react-slick'; // Assuming you are using react-slick for the slider
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const HotelsCard = () => {

    const cards = [
        {
            title: 'Quality Inn',
            description: 'An affordable stay and all the amenities you need to relax and focus on what really matters.',
            picture: '/static/qualityinn.webp',
            link: 'https://www.choicehotels.com/quality-inn'
        },
        {
            title: 'Wyndham Hotel',
            description: 'Wyndham Minot hotel, located off US Route 2 and US Route 83 and nearby area businesses including Harley Davidson, Maysa Arena, and the Dakota Square Mall. ',
            picture: '/static/microtel.jpg',
            link: 'https://www.wyndhamhotels.com/microtel/minot-north-dakota/microtel-inn-and-suites-by-wyndham-minot/overview'
        },
        {
            title: 'RoughRider Campground',
            description: ' Minutes from North Dakota State Fair, Roosevelt Park Zoo, Scandinavian Heritage Park, Dakota Territory Air Museum and so much more. ',
            picture: '/static/camp1.jpg',
            link: 'https://www.roughriderrvresort.com/'
        },
        {
            title: 'MellowMoose Campground',
            description: ' New as of summer of 2023! Tent and RV sites now open. Beautiful wooded area with lots of shade. Walking/biking paths nearby. ',
            picture: '/static/camp2.jpg',
            link: 'https://www.mellowmoosecampground.com/'
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
            >Hotels and Camping</Typography>
                <Box
                    className="card-slider"
                    sx={{
                        order: { xs: 1, md: 0 }, // Show slider second on mobile (xs), first on desktop (md)
                        width: { xs: '290px', md: '600px' },
                        margin: { xs: '0 auto', md: '50px' },
                        marginBottom: { xs: '150px', md: '100px' },
                        maxWidth: '800px',
                    }}
                >
                    <Slider {...sliderSettings}>
                        {cards.map((card, index) => (
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
                                    }}
                                >
                                    <a href={card.link} style={{ textDecoration: 'none' }}>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={card.picture}
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
                                                height: { xs: '100px' },
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                sx={{ fontFamily: 'Motterdam', color: 'black' }}
                                            >
                                                {card.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: 'WastedVidney',
                                                    fontWeight: 'bold',
                                                }}
                                                color="textSecondary"
                                            >
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                    </a>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </Box>
            </Box>
    );
}

export default HotelsCard;
