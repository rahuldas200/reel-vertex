
import './App.css';
import Navbar from './components/common/Navbar'
import HeroSection from './components/HeroSection';
import Steps from './components/Steps';
import Testimoni from './components/Testimoni';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <HeroSection/>
      </div>
      <div className='w-full steps-bg'>
        <Steps/>
      </div>
      <div className='w-full testimoni'>
       <Testimoni/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
