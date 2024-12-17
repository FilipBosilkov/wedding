import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    CardMedia,
    CardContent
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "@mui/material/Card";
import ReCAPTCHA from 'react-google-recaptcha';

const Cards = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [guests, setGuests] = useState('');
    const [attendance, setAttendance] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    // Validation error states
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    // reCAPTCHA token state
    const [captchaToken, setCaptchaToken] = useState('');

    const cards = [
        {
            title: 'About us',
            description: 'A brief story about our lives, how we met and fell in love',
            picture: '/static/3.jpg',
            link: '/aboutus'
        },
        {
            title: 'Hotels',
            description: 'Hotels and Camping spots around Minot for our guests!',
            picture: '/static/news.jpg',
            link: '/hotels'
        },
        {
            title: 'Registry',
            description: 'See our wedding registry and gift ideas',
            picture: '/static/amazon.png',
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

    const validateForm = () => {
        let valid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset errors
        setNameError('');
        setEmailError('');
        setResponse('');

        if (!name.trim()) {
            setNameError('Name is required');
            valid = false;
        }

        if (!email.trim()) {
            setEmailError('Email is required');
            valid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
            valid = false;
        }

        return valid;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        if (!captchaToken) {
            setResponse('Please complete the reCAPTCHA before submitting.');
            return;
        }

        try {
            // First, verify the reCAPTCHA token
            const verifyRes = await fetch('/verify-captcha/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ captcha_token: captchaToken }),
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
                setResponse(verifyData.message || 'CAPTCHA verification failed.');
                return;
            }

            // If verification succeeded, proceed with form submission
            const rsvpData = `
                Name: ${name}
                Email: ${email}
                Number of Guests: ${guests || 'N/A'}
                Attendance: ${attendance || 'No Response'}
                Message: ${message || 'N/A'}
            `.trim();

            const formData = new FormData();
            formData.append('text', rsvpData); // Use the existing 'text' key

            const res = await fetch('https://wedding-7ib1.onrender.com/submit-message/', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();
            setResponse(result.status || result.error);
            setName('');
            setEmail('');
            setGuests('');
            setAttendance('');
            setMessage('');
            setCaptchaToken(''); // reset captcha token
        } catch (error) {
            console.error('Error:', error);
            setResponse('Error sending RSVP');
        }
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
            sx={{
                padding: { xs: '0px', md: '0' },
                paddingTop: { xs: '10px', md: '0' },
                gap: { xs: '20px', md: '0' },
            }}
        >
            <Box
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: '10px',
                    padding: '20px',
                    alignItems: 'center',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '10px',
                    width: { xs: '280px', md: '400px' },
                    color: 'black',
                    border: '2px solid white',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: 'Motterdam, sans-serif',
                        mb: 2,
                        color: 'black',
                    }}
                >
                    R S V P
                </Typography>

                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                    error={Boolean(nameError)}
                    helperText={nameError || ''}
                    sx={{
                        maxWidth: 400,
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                            color: 'black',
                            fontFamily: 'Oswald'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'cyan',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                    }}
                />

                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                    error={Boolean(emailError)}
                    helperText={emailError || ''}
                    sx={{
                        maxWidth: 400,
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                            color: 'black',
                            fontFamily: 'Oswald'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'cyan',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                    }}
                />

                <TextField
                    label="Number of Guests"
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    fullWidth
                    sx={{
                        maxWidth: 400,
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                            color: 'black',
                            fontFamily: 'Oswald'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'cyan',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                    }}
                />

                <FormControl component="fieldset" sx={{ maxWidth: 400, textAlign: 'left' }}>
                    <FormLabel component="legend" sx={{ color: 'black' }}>Will You Attend?</FormLabel>
                    <RadioGroup
                        value={attendance}
                        onChange={(e) => setAttendance(e.target.value)}
                        row
                    >
                        <FormControlLabel
                            value="yes"
                            control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />}
                            label="Yes"
                        />
                        <FormControlLabel
                            value="no"
                            control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />}
                            label="No"
                        />
                    </RadioGroup>
                </FormControl>

                <TextField
                    label="Message (Optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                        maxWidth: 400,
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                            color: 'black',
                            fontFamily: 'Oswald'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'cyan',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                    }}
                />

                {/* Add reCAPTCHA component */}
                <ReCAPTCHA
                    sitekey="6LeTxJ0qAAAAADOJu7zQ3fvQBKoK5N3zryi6Ll6U"
                    onChange={handleCaptchaChange}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: '#98BD42',
                        color: '#FFF',
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: { xs: '10px', md: '15px' },
                        fontWeight: 'bold',
                        padding: { xs: '10px 15px', md: '10px 30px' },
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
                    Submit RSVP
                </Button>

                <Typography
                    sx={{
                        mt: 2,
                        minHeight: '1px',
                        color: response === 'Message sent successfully!' ? 'green' : 'red',
                        fontWeight: 'bold',
                        wordWrap: 'break-word',
                    }}
                >
                    {response}
                </Typography>
            </Box>

            <Box
                className="card-slider"
                sx={{
                    order: { xs: 1, md: 0 },
                    width: { xs: '280px', md: '400px' },
                    margin: { xs: '0 auto', md: '50px' },
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
                                    marginRight: '0px',
                                    marginTop: '23px',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: { xs: 'auto', md: '674px' },
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
                                            height: { xs: '300px', md: '580px' },
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
};

export default Cards;
