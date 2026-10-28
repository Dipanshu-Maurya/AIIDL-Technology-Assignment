import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <CTASection/>
    </div>
  )
}

export default Home
