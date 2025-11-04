import Blog from './companents/Blog'
import Footerr from './companents/Footerr'
import Footerr from './companents/Footerr'
import Headerr from './companents/header'
import Pagode from './companents/Pagode'
import Photo from './companents/Photo'
import Popularne from './companents/Popularne'
import Program from './companents/Program'
import Showcase from './companents/showcase'

const App = () => {
  return (
    <div className='containerr'>
      <Headerr/>
      <Showcase/>
      <Pagode/>
      <Program/>
      <Popularne/>
      <Blog/>
      <Photo/>
      <Footerr/>
    </div>
  )
}

export default App