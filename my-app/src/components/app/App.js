import './App.css';
import Navbar from '../modules/Navbar';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Footer from '../modules/Footer';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/catalog' element={<Catalog/>}/>
        <Route exact path='/products/:id' element={<Product/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes> 

    <Footer/>
         
    </>
  );
}

export default App;
