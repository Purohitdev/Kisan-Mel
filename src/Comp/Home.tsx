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

function Home() {
  return (
  <div className='bg-[#e4e1d8b2]'>
   <Hero/>
   <Work/>
   <Video/>
   <Partnership/>
   <Testimonals/>
   <Stories/>
   <Service/>
   <App_promo/>
   <Achivemnet/>
   <Contact/>

   </div>
  )
}

export default Home