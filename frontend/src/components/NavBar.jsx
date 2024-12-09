import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import CountDown from "./CountDown";
import { useLocation } from 'react-router-dom';

const targetDate = '2025-07-05T00:00:00.00';

function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <AppBar position="static" sx={{ backgroundColor: "rgba(121, 145, 160, 1)" }}>
            <Toolbar sx={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: { xs: 'center', md: 'space-between' },
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                padding: { xs: '10px', md: '0 20px' }
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center'
                    }}
                >
                    <Button
                        href="/"
                        sx={{
                            fontFamily: 'Oswald',
                            fontWeight: 'bold',
                            color: isActive('/') ? '#39454D' : '#FFFFFF',
                            fontSize: '25px',
                            mr: { xs: 0, md: '20px' },
                            mb: { xs: '10px', md: 0 }
                        }}
                    >Home</Button>

                    <Button
                        href="/Registry"
                        sx={{
                            fontFamily: 'Oswald',
                            fontWeight: 'bold',
                            color: isActive('/Registry') ? '#39454D' : '#FFFFFF',
                            fontSize: '25px',
                            mr: { xs: 0, md: '20px' },
                            mb: { xs: '10px', md: 0 }
                        }}
                    >Registry</Button>

                    <Button
                        href="/Gallery"
                        sx={{
                            fontFamily: 'Oswald',
                            fontWeight: 'bold',
                            color: isActive('/Gallery/') ? '#39454D' : '#FFFFFF',
                            fontSize: '25px',
                            mr: { xs: 0, md: '20px' },
                            mb: { xs: '10px', md: 0 }
                        }}
                    >Gallery</Button>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: { xs: '10px', md: 0 },
                    mb: { xs: '10px', md: 0 }
                }}>
                    <CountDown targetDate={targetDate} />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        marginLeft: { xs: 0, md: 'auto' }
                    }}
                >
                    <Button
                        href="/AboutUs"
                        sx={{
                            fontFamily: 'Oswald',
                            fontWeight: 'bold',
                            color: isActive('/AboutUs') ? '#39454D' : '#FFFFFF',
                            fontSize: '25px',
                            mr: { xs: 0, md: '20px' },
                            mb: { xs: '10px', md: 0 }
                        }}
                    >About Us</Button>

                    <Button
                        href="/Contact"
                        sx={{
                            fontFamily: 'Oswald',
                            fontWeight: 'bold',
                            color: isActive('/Contact') ? '#39454D' : '#FFFFFF',
                            fontSize: '25px',
                            mr: { xs: 0, md: '20px' }
                        }}
                    >Contact Us</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
