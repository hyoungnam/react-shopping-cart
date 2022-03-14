import React from 'react'
import { decrement, increment } from './counterSlice'
import { useAppSelector, useAppDispatch } from 'store/hook'
import { useGetPokemonByNameQuery } from 'services/pokemon'

export default function Counter() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}
