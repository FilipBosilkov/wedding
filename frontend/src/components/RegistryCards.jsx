import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import axios from "axios";

const RegistryCards = () => {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        axios.get('https://wedding-7ib1.onrender.com/api/registry-items')
            .then((response) => {
                setItems(response.data);
                console.log(response.data);
            })
            .catch(error => { console.log(error); });
    }, []);

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            sx={{ padding: '20px',marginBottom: '200px' }}
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
                        // Add transition properties
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
                                    sx={{
                                        fontFamily: 'Oswald'
                                    }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        fontFamily: 'Oswald'
                                    }}
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