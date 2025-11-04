import Blog from './companents/Blog'
import Footerr from './companents/Footerr'
import Headerr from './companents/Headerr'
import Pagode from './companents/Pagode'
import Photo from './companents/Photo'
import Popularne from './companents/Popularne'
import Program from './companents/Program'
import Showcases from './companents/Showcases'

const App = () => {
  return (
    <div className='containerr'>
      <Headerr/>
      <Showcases/>
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