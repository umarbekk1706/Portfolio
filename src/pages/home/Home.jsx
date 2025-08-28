import React from 'react'
import Header from '../../components/header/Header';
import Hero from '../../sections/hero/Hero';
import About from '../../sections/about/About';
import Projects from '../../sections/projects/Projects';
import Contact from '../../sections/contact/Contact';
import Footer from '../../components/footer/Footer';
import styles from "./home.module.css";
function Home() {
  return (
    <div >
        <Header/>
        <main >
           <Hero/>
           <About/>
           <Projects/>
           <Contact/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home;