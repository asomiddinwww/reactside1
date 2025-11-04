import Blog from './companents/Blog'
import Footer from './companents/Footer'
import Header from './companents/header'
import Pagode from './companents/Pagode'
import Photo from './companents/Photo'
import Popularne from './companents/Popularne'
import Program from './companents/Program'
import Showcase from './companents/showcase'

const App = () => {
  return (
    <div className='containerr'>
      <Header/>
      <Showcase/>
      <Pagode/>
      <Program/>
      <Popularne/>
      <Blog/>
      <Photo/>
      <Footer/>
    </div>
  )
}

export default App