import './App.css';
import Navbar from './components/Navbarf'
import Footer from './components/footer'
import Home from './components/Home'
import Flightbook from './components/flightbook'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LoginScreen from './components/LoginScreen';
import Registerscreen from './components/Registerscreen';
import Profile from './components/profile'
import Book from './components/book'
import ContactUs from './components/contactus';
import FaqSection from './components/FAQSection';
import Payment from './components/Payment'
function App() {
  return (<>
    <Router>
    <Navbar></Navbar>
 
    <main className='py-3 main'>
    <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route exact path='/flight/:id' element={<Flightbook/>}></Route>
          <Route exact path='/login' element={<LoginScreen/>}></Route>
          <Route exact path='/register' element={<Registerscreen/>}></Route>
          <Route exact path='/Profile' element={<Profile/>}></Route>
          <Route exact path=':id/book' element={<Book/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/faqs' element={<FaqSection/>}></Route>
          <Route path=':id/payment' element={<Payment></Payment>}></Route>
        </Routes>
      
    </main>
    
    <Footer></Footer>
    </Router>
  </>);
}

export default App;
