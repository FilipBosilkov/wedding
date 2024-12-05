import React, { useEffect, useState } from 'react';
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
                justifyContent: "space-between",
            }}>
                <Button
                    href="/"
                    sx={{
                        fontFamily: 'Oswald', fontWeight: 'bold', color: isActive('/') ? '#39454D' : '#FFFFFF', // Highlight active button with gold color
                        fontSize: '25px', mr: '20px'
                    }}
                > Home</Button>

                <Button
                    href="/Registry"
                    sx={{
                        fontFamily: 'Oswald', fontWeight: 'bold', color: isActive('/Registry') ? '#39454D' : '#FFFFFF',
                        fontSize: '25px', mr: '20px'
                    }}
                >Registry</Button>

                <Button
                    href="/Gallery"
                    sx={{
                        fontFamily: 'Oswald', fontWeight: 'bold', color: isActive('/Gallery/') ? '#39454D' : '#FFFFFF',
                        fontSize: '25px', mr: '20px'
                    }}
                >Gallery</Button>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1
                }}>
                    <CountDown targetDate={targetDate} />
                </Box>

                <Button
                    href="/AboutUs"
                    sx={{
                        fontFamily: 'Oswald', fontWeight: 'bold', color: isActive('/AboutUs') ? '#39454D' : '#FFFFFF',
                        fontSize: '25px', mr: '20px', marginLeft: 'auto'
                    }}
                >About Us</Button>

                <Button
                    href="/Contact"
                    sx={{
                        fontFamily: 'Oswald', fontWeight: 'bold', color: isActive('/Contact') ? '#39454D' : '#FFFFFF',
                        fontSize: '25px', mr: '20px'
                    }}
                >Contact Us</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
