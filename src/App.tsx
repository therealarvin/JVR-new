import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Partners from './components/Partners'
import Careers from './components/Careers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Careers />
      </main>
      <Footer />
    </div>
  )
}

export default App
