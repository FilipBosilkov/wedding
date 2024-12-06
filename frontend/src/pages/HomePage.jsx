
import React, {useRef} from 'react';
import Hero from "../components/Hero";
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