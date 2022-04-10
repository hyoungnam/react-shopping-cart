import { useState } from 'react'
import { useQuery } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { getProductList } from '../../api'
import { ProductListPagingResponse } from '../../api/dto'
import './ProductListPage.css'

export default function ProductListPage() {
  const [pageOffset, setPageOffset] = useState(1)
  const { isLoading, isError, data, error } = useQuery<
    AxiosResponse<ProductListPagingResponse>,
    AxiosError
  >(['productList', pageOffset], () => getProductList(pageOffset))

  if (isLoading) return <div>...loading</div>
  if (isError) return <div>{error.message}</div>

  return (
    <>
      <section className="product-container">
        {data?.data.products.map(({ id, name, price, imageUrl }) => {
          return (
            <div key={id}>
              <img width="280px" src={imageUrl} alt={name} />
              <div className="flex justify-between w-280 p-5">
                <div className="product-info">
                  <span className="product-info__name">{name}</span>
                  <span className="product-info__price">{price}원</span>
                </div>
                <img src="assets/svgs/cart.svg" alt="장바구니" />
              </div>
            </div>
          )
        })}
      </section>
      <div className="product-pagesize__container">
        {[...Array(data?.data.pageSize).keys()].map((num) => (
          <button
            className={`product-pagesize__button ${
              pageOffset === num + 1 ? 'product-pagesize__active' : ''
            }`}
            onClick={() => setPageOffset(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </>
  )
}
