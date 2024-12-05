
import React, {useRef} from 'react';
import { Container, Typography, Button, Box, Card, CardMedia, CardContent, Grid } from '@mui/material';
import Navbar from "../components/NavBar";
import CountDown from "../components/CountDown";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Summary from "../components/Summary";



const HomePage = () => {
    const summaryRef = useRef(null);
    const scrollToDetails= () =>
    {
        summaryRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <Hero scrollToDetails={scrollToDetails}/>
            <Cards />
            <Summary ref={summaryRef}/>

        </>
    );
};

export default HomePage;