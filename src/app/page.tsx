import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skilss'
import Contact from './sections/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}