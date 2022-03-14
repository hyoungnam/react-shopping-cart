import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import counterReducer from 'features/counter/counterSlice'
import { productsApi } from 'services/products'

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  counter: counterReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
