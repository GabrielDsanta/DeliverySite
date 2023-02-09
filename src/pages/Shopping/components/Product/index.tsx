import { useContext } from 'react'
import { DeliveryContext } from '../../../../context/DeliveryContext'
import { v4 } from 'uuid'
import { ContainerProduct } from './styles'
import { Food } from '../../../../models/food'


export function Product({ id }: Food) {
  const { cart } = useContext(DeliveryContext)

  const products = cart.filter((item) => item.product.idRestaurante === id)

  return (
    <ContainerProduct>
      {products.map((item) => {
        return(
          <div style={{ display: 'flex', marginTop: 30, alignItems: 'center', paddingBottom: 20 }}>
              <img src={item.product.url} height={50} alt="" />
              <h4 key={v4()}>{item.product.nome}</h4>
          </div>
        )
      })}
    </ContainerProduct>
  )
}
