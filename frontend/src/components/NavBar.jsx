import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Box } from "@mui/material";
import CountDown from "./CountDown";
import { useLocation } from 'react-router-dom';

const targetDate = '2025-07-05T00:00:00.00';

function Navbar() {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'Registry', href: '/Registry' },
        { text: 'Gallery', href: '/Gallery' },
        { text: 'About Us', href: '/AboutUs' },
        { text: 'Contact Us', href: '/Contact' },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: "rgba(121, 145, 160, 1)" }}>
            <Toolbar sx={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: { xs: 'space-between', md: 'space-between' },
                alignItems: 'center',
                padding: { xs: '10px', md: '0 20px' }
            }}>
                {/* Hamburger Menu for Mobile */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"

                    sx={{ display: { xs: 'block', md: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>

                {/* Drawer for Mobile Menu */}
                <Drawer

                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 250,
                        backgroundColor: 'rgba(121, 145, 160, 1)',
                        height: '100%'}}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List >
                            {menuItems.map((item) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton component="a" href={item.href}>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                color: 'white',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'bold',
                                                fontSize: '20px', // Adjust size if needed
                                            }}
                                            primary={item.text}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>

                {/* Desktop Navbar */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center'
                    }}
                >
                    {menuItems.map((item) => (
                        <Button
                            key={item.text}
                            href={item.href}
                            sx={{
                                fontFamily: 'Oswald',
                                fontWeight: 'bold',
                                color: isActive(item.href) ? '#39454D' : '#FFFFFF',
                                fontSize: '25px',
                                mr: 2
                            }}
                        >
                            {item.text}
                        </Button>
                    ))}
                </Box>

                {/* Countdown Timer */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ml: { xs: 0, md: 2 },
                    mr: { xs: 2, md: 3 }
                }}>
                    <CountDown targetDate={targetDate} />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
