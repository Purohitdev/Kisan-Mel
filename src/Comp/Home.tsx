import Hero from './Hero'
import Work from './Work'
import Video from './Video'
import Testimonals from './Testimonals'
import Partnership from './Partnership'
import Stories from './Stories'
import Service from './Service'
import App_promo from './App_promo'
import Achivemnet from './Achivemnet'
import Contact from './Contact'
import Clints from './Clints'
import Banner from './Banner'
import Footer from '../Footer'

function Home() {
  return (
  <div className='bg-[#e4e1d8b2]'>
   <Hero/>
   <Work/>
   <Video/>
   <Partnership/>
   <Stories/>
   <Testimonals/>
   <Service/>
   <App_promo/>
   <Achivemnet/>
   <Contact/>
   <Clints/>
   <Banner/>
   <Footer/>

   </div>
  )
}

export default Home