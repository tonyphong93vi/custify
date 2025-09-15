import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import TargetAudience from '@/components/TargetAudience'
import HowItWorks from '@/components/HowItWorks'
import SecurityPrivacy from '@/components/SecurityPrivacy'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <TargetAudience />
      <HowItWorks />
      <SecurityPrivacy />
      <FAQ />
      <Footer />
    </main>
  )
}
