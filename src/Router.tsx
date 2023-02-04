import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Products } from './pages/Products'
import { Shopping } from './pages/Shopping'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shopping" element={<Shopping />} />
      </Route>
    </Routes>
  )
}
