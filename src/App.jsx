
import ItemListContainer from './components/StoreView/ItemListContainer'
import NavBar from './components/navigation/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart'
import ItemDetail from './components/StoreView/ItemDetail'
import Checkout from './components/cart/Checkout'
import FinishedOrder from './components/cart/FinishedOrder'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
>
</ToastContainer>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/itemListContainer/:idCategory" element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route exact path="/FinishedOrder/:id" element={<FinishedOrder/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
