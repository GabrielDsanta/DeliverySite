import {
  ContainerCardProductCard,
  ValueAndQuantity,
  Description,
} from './styles'

export function CardProductCart() {
  return (
    <ContainerCardProductCard>
      <ValueAndQuantity>
        <p>1x Produto 1</p>
        <p>99.90</p>
      </ValueAndQuantity>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ullam
        distinctio at debitis, asperiores error, veniam ad ratione incidunt,
      </Description>
      <button>Remover</button>
    </ContainerCardProductCard>
  )
}
