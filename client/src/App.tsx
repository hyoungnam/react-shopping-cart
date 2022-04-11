import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
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
            <Switch>
              <Route path="/">
                <ProductListPage />
              </Route>
              <Route path="/cart">
                <CartPage />
              </Route>
              <Route path="/cart">
                <ProductOrderListPage />
              </Route>
            </Switch>
          </Nav>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
