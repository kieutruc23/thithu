import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ListProduct from './component/ListProduct'
import AddProduct from './component/AddProduct'
import EditProduct from './component/EditProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<ListProduct />} />
          <Route path='add' element={<AddProduct />} />
          <Route path='edit'>
            <Route path=':id' element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
