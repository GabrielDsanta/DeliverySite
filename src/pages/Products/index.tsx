import logo from '../.././assets/img- logo.svg'
import { Star } from 'phosphor-react'
import { ContainerProducts, RestaurantInformation, ProductList } from './styles'
import { CardProduct } from './components/CardProduct'
export function Products() {
  return (
    <ContainerProducts>
      <RestaurantInformation>
        <img src={logo} alt="" />
        <h1>Restaurante 1</h1>
        <span>
          <Star size={42} color="#D2F200" weight="fill" />
          5,0
        </span>
      </RestaurantInformation>
      <p>Produtos</p>
      <ProductList>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ProductList>
    </ContainerProducts>
  )
}
