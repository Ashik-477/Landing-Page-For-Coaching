import './App.css';
import Navbar from './Components/Navbar.js';
import Service from './Service.jsx';
import Help from './Help.jsx';
import Clients from './Clients.jsx';
import Articles from './Articles.jsx';
import Guids from './Guids.jsx';
import Footer from './Footer.jsx';
function App() {
  return (
 <div className='App'>
   <Navbar />
   <div>
    <Service/>
   </div>
  <div className='help'> 
     <Help/>
   </div>
    <Clients/>
    <Articles/>
    <Guids/>
    <Footer/>
 </div>
  );
}

export default App;
