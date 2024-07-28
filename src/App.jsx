import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import CartWidget from './components/CartWidget'
import ItemCount   from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {

  const agregarAlCarrito=(count)=>{
    console.log(count)

  }
 

  return (
  <BrowserRouter>
    
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer  saludo="Bienvenidos a Amadeo's Ecommerce"/>}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer  saludo="Bienvenidos a Amadeo's Ecommerce"/>}/>
      <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
    </Routes>
    
  </BrowserRouter>    
   )  
}

export default App
