import Header from '@/components/Header'
import ResourcesHero from '@/components/ResourcesHero'
import BlogArticles from '@/components/BlogArticles'
import BlogCategories from '@/components/BlogCategories'
import Footer from '@/components/Footer'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ResourcesHero />
        <BlogCategories />
        <BlogArticles />
      </main>
      <Footer />
    </div>
  )
}
