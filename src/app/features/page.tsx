import Header from '@/components/Header'
import FeaturesHero from '@/components/FeaturesHero'
import ProductFeatures from '@/components/ProductFeatures'
import ManageFeatures from '@/components/ManageFeatures'
import AnalyseFeatures from '@/components/AnalyseFeatures'
import ProductivityFeatures from '@/components/ProductivityFeatures'
import IntegrationFeatures from '@/components/IntegrationFeatures'
import Footer from '@/components/Footer'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FeaturesHero />
        <ProductFeatures />
        <ManageFeatures />
        <AnalyseFeatures />
        <ProductivityFeatures />
        <IntegrationFeatures />
      </main>
      <Footer />
    </div>
  )
}
