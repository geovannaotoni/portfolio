import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css'
import About from '@/components/About/About';
import Technologies from '@/components/Technologies/Technologies';
import Footer from '@/components/Footer/Footer';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
