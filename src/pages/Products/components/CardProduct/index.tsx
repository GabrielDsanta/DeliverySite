import logo from '../../../.././assets/img- logo.svg'
import {
  ContainerCardProduct,
  ProductInformation,
  ValueAndQuantity,
} from './styles'
export function CardProduct() {
  return (
    <ContainerCardProduct>
      <ProductInformation>
        <h3>Produto 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere
          sem eget semper egestas.
        </p>
        <ValueAndQuantity>
          <p>R$ 99,99</p>
          <input type="number" min={0} />
        </ValueAndQuantity>
      </ProductInformation>
      <img src={logo} alt="" />
    </ContainerCardProduct>
  )
}
