import { useAppSelector, useAppDispatch } from 'store/hook'
import { useGetProductsQuery } from 'services/products'

export default function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery('')
  console.log('data: ', data, error, isLoading)
  return <div>hello</div>
}
