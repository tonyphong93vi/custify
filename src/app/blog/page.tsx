import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogHero from '@/components/BlogHero'
import BlogPosts from '@/components/BlogPosts'
import BlogCTA from '@/components/BlogCTA'

export default function Blog() {
  return (
    <main>
      <Header />
      <BlogHero />
      <BlogPosts />
      <BlogCTA />
      <Footer />
    </main>
  )
}
