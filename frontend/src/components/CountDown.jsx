import {Box, Typography} from "@mui/material";
import React, { useState, useEffect } from 'react';



const CountDown = ({ targetDate }) => {
    const calculateTime = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {}
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / (1000)) % 60)
        };
    return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTime());
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTime());
        },1000);
        return () => {clearInterval(interval)};

    },[])

    return (
        <Box display="flex" flexDirection="column"  justifyContent='center' alignItems="center"

             backgroundColor='#D8BFD9' borderRadius='10px' color='white'
             sx={{
                 margin: '5px',
                 width: '600px',
                 borderRadius: "10px",
                 color: "white",
                 fontFamily: "Oswald", // Apply font family to the entire Box
                 backgroundColor: 'rgba(0, 0, 0, 0.3)', // Gradient background
                 boxShadow: "0px 0px 4px rgba(1, 1, 1, 0.5)", // Box shadow effect
                 padding: 'px',

                 // Add some padding to make the content look better
             }}>

                <h2 style= {{marginLeft: '10px',marginRight: '10px', marginTop: '5px', marginBottom: '5px'}}>
                    COUNTDOWN:  {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes, {timeLeft.seconds} Seconds
                </h2>

        </Box>
);

}

export default CountDown;