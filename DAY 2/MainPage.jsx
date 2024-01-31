
import {  useNavigate } from 'react-router-dom'
import '../Style/Home.css'
 import Navbar from './Navbar'
// import Nvbar from './Navbar'
// import SideBar from './SideBar'
function Home() {
  const navigate = useNavigate();

  return (
    <>

        <Navbar/>
        <div className='hom'>
       
        <div className='theme1'>
        <div className='txt1'><button onClick={()=> navigate('/wed')}>Wedding Anniversary</button></div>   
        
        </div>
        <div className='theme2'>
        <div className='txt'><button onClick={()=> navigate('/birth')}>Birthday Party</button></div>    
        
        </div>
        <div className='theme3'>
        <div className='txtcen'><button onClick={()=> navigate('/gend')}>Gender Reveal Party</button></div> 
           
        </div>
        <div className='theme4'>
        <div className='txt'>Success Meet</div>
            
        </div>
        </div>
        <div className='desch'>
          <div className='slog'>
            
          
          
        <div className='txtt'>
        At EventSphere, we specialize in transforming ordinary events into extraordinary memories. Our event organizing website is your one-stop destination for seamless, stress-free, and unforgettable experiences. Whether it s a corporate gathering, a milestone celebration, or a dreamy wedding, we bring creativity, precision, and passion to every occasion.
            
        </div>
        </div>
        </div>

        
    </>
  )
}

export default Home