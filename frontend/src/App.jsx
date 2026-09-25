import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import Philosophy from "./components/Philosophy";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import SocialMedia from "./components/SocialMedia";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Stats />
                <Programs />
                <Philosophy />
                <Transformations />
                <Testimonials />
                <SocialMedia />
                <FAQ />
                <FinalCTA />
                <Consultation />
            </main>

            <Footer />
        </>
    );
}

export default App;