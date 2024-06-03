
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Heroimages from './components/Heroimages';
import Cardsliders from './components/Cardsliders';
import Adandslider from './components/Adandslider';
import SalesAlert from './components/SalesAlert';
import Bannerfooter from './components/Bannerfooter';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app'>
  <Header/>
  <Subheader/>
  <Heroimages/>
  <Cardsliders/>
  <Adandslider/>
<SalesAlert/>  
<Bannerfooter/>
<Footer/>
    </div>
  )
}

export default App
