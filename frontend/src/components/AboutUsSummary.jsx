import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUsSummary = () => {
    return (
        <Box sx={{ p: { xs: 2, sm: 3 }, mt: { xs: 4, md: 6 } }}>
            <Typography
                sx={{
                    fontFamily: "Motterdam",
                    WebkitBackgroundClip: "text",
                    textAlign: "center",
                    textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                    fontSize: { xs: "30px", sm: "40px", md: "50px" },
                    color: "white",
                    mb: { xs: 2, md: 4 },
                }}
                variant="h4"
                align="center"
            >
                About Us
            </Typography>
            <Box
                sx={{
                    // Instead of large fixed margins, use responsive spacing
                    mx: "auto",
                    maxWidth: { xs: "95%", sm: "80%", md: "60%" },
                    backgroundColor: "rgba(0,0,0,0.5)",
                    p: { xs: 2, md: 4 },
                    borderRadius: "20px",
                    mb: { xs: 4, md: 10 },
                }}
            >
                <Typography
                    variant="body1" // Use a standard variant
                    align="justify"
                    fontFamily="WastedVidney"
                    fontSize={{ xs: "16px", md: "20px" }}
                    sx={{
                        textShadow: "4px 4px 6px rgba(0, 1, 1, 0.9)",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    Filip and Hailee’s story began when they met as servers at a restaurant called Ground Round. Filip was
                    in the U.S. on a work and travel visa, which allows college students from abroad to experience working
                    and traveling stateside—but only for a limited time. As they worked together, their friendship deepened,
                    and they grew closer. When Filip’s time in Minot was coming to an end, Hailee, already sure of her love
                    for him, felt a profound sadness, uncertain if they would ever see each other again.
                    <br></br> <br></br>
                    However, this was far from the end of their story. They stayed in close contact, their bond only growing
                    stronger with time and distance. Eventually, they chose to make their relationship official and face the
                    challenges together—a decision that would become one of the best of their lives. In April 2024, Hailee
                    visited Macedonia, and on April 24th, during a boat ride through the enchanting springs of Saint Naum in
                    Ohrid, Filip proposed. Not long after, they began the K1 visa process.
                    <br></br> <br></br>
                    Hailee returned to Macedonia in September 2024, and they shared many joyful moments, including a trip to
                    Malta and attending a few weddings—one being Filip’s brother’s—where they took notes for their own.
                    Today, their love continues to grow, strong and steadfast, as they await the day they’ll be together
                    without distance between them.
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutUsSummary;
