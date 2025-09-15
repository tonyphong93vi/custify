import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import AboutMission from '@/components/AboutMission'
import AboutStory from '@/components/AboutStory'
import AboutLeadership from '@/components/AboutLeadership'
import AboutTrustedBy from '@/components/AboutTrustedBy'

export default function About() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutStory />
      <AboutLeadership />
      <AboutTrustedBy />
      <Footer />
    </main>
  )
}
