
import AboutFeatures from './components/AboutFeatures'
import AppAndStats from './components/AppAndStats'
import BlogGrid from './components/BlogGrid'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ServicesSection from './components/ServiceSection'
import TestimonialsFAQ from './components/TestimonialsFAQ'
import TopNav from './components/TopNav'
import VideoClientsSection from './components/VideoClientsSection'

function App() {
 

  return (
    <>
     <TopNav/>
     <Navbar/>
     <HeroSection/>
     <ServicesSection/>
     <AboutFeatures/>
     <VideoClientsSection/>
     <BlogGrid/>
     <TestimonialsFAQ/>
     <AppAndStats/>
     <Footer/>
    </>
  )
}

export default App
