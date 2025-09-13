import Header from '@/components/Header'
import HelpCenterHero from '@/components/HelpCenterHero'
import HelpCenterCategories from '@/components/HelpCenterCategories'
import HelpCenterFAQ from '@/components/HelpCenterFAQ'
import Footer from '@/components/Footer'

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HelpCenterHero />
        <HelpCenterCategories />
        <HelpCenterFAQ />
      </main>
      <Footer />
    </div>
  )
}
