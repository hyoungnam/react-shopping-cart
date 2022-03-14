import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import App from './App'
import ProductListPage from 'pages/ProductListPage'
import Counter from 'features/counter/Counter'
import Layout from './components/Layout'
import reportWebVitals from './reportWebVitals'
import './reset.css'

const store = setupStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ProductListPage />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/app" element={<App />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
