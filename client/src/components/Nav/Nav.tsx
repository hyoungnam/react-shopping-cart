import { useNavigate } from 'react-router-dom'

import './Nav.css'

export default function Nav({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  return (
    <>
      <nav className="nav flex justify-around">
        <div className="flex-center">
          <h1 className="nav-title" onClick={() => navigate('/')}>
            CLEAN CODE SHOP
          </h1>
        </div>
        <div className="flex gap-15">
          <button className="nav-button" onClick={() => navigate('/cart')}>
            장바구니
          </button>
          <button className="nav-button" onClick={() => navigate('/product-order-list')}>
            주문목록
          </button>
        </div>
      </nav>
      {children}
    </>
  )
}
