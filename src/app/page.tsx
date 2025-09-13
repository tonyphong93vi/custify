import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AISection from '@/components/AISection'
import OmnichannelSection from '@/components/OmniChannelSection'
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection'
import SecuritySection from '@/components/SecuritySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AISection />
        <OmnichannelSection />
        <KnowledgeBaseSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  )
}