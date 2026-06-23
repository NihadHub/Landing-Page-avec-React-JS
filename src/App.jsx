import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <main>
        <Hero/>
        <Feature/>
        <About/>
        <Testimonials/>
        <Contact/>
    
      </main>
      <Footer/>
    </div>
  )
}
export default App