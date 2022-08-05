import React from 'react';
import Navigation from "../components/Navigation";
import PizzaCard from "../components/PizzaCard";

function About() {
    return (
        <div>
            <Navigation />
            <h1>This is the about page</h1>
            <PizzaCard />
        </div>
    )
}

export default About;