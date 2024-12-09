import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import { AllContext } from './Context/AllContext'

function App() {

  return (
    <AllContext>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}></Route> 
        <Route path='/:tag' element = {<ProductDetails/>}></Route>
      </Routes>
     </Router>
    </AllContext>
  )
}

export default App
