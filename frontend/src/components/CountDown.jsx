import {Box} from "@mui/material";
import React, { useState, useEffect, useCallback } from 'react';


const CountDown = ({ targetDate }) => {
    const calculateTime = useCallback(() => {
        const difference = new Date(targetDate) - new Date();
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }, [targetDate]); // Dependency: targetDate

    const [timeLeft, setTimeLeft] = useState(calculateTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTime());
        }, 1000);
        return () => clearInterval(interval);
    }, [calculateTime]); // Add calculateTime to the dependency array

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#D8BFD9"
            borderRadius="10px"
            color="white"
            sx={{
                fontSize: { xs: '9px', md: '16px' },
                margin: '5px',
                width: { xs: '270px', md: '600px' },
                borderRadius: "10px",
                color: "white",
                fontFamily: "Oswald",
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                boxShadow: "0px 0px 4px rgba(1, 1, 1, 0.5)",
                padding: { xs: '0', md: '10px'}, // Adjusted for better spacing
            }}
        >
            <h2
                style={{
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '5px',
                    marginBottom: '5px',
                }}
            >
                COUNTDOWN: {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes, {timeLeft.seconds} Seconds
            </h2>
        </Box>
    );
};

export default CountDown;