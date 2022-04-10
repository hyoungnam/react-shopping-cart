import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import ProductOrderListPage from './pages/ProductOrderListPage'
import CartPage from './pages/CartPage'
import Nav from './components/Nav'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav>
            <Routes>
              <Route path="/" element={<ProductListPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/product-order-list" element={<ProductOrderListPage />}></Route>
            </Routes>
          </Nav>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
