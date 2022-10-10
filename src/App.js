import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import { ContextProvider } from './components/context/GlobalContext';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen bg-gradient-to-r from-cyan-500 to-slate-300'>
          <Navbar/>
          <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home/>}/>
              </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
