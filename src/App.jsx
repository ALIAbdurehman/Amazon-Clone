import './App.css'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar'
import Home from './Screen/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './Screen/Products/products'
import Cart from './Screen/Cart/cart'



function App() {
  
  
  return (
    <div id='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
