import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { DeliveryContext } from '../../context/DeliveryContext'
import { CardProductCart } from '../CardProductCart'
import {
  Content,
  Overlay,
  CloseButton,
  Products,
  TotalOfProducts,
  Checkout,
} from './styles'

export function ShoppingCartModal() {
  const { productsCarts } = useContext(DeliveryContext)
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={22} /> Seus Pedidos
        </CloseButton>
        <Products>
          {productsCarts.map((item) => {
            return (
              <CardProductCart
                key={item.id}
                descricao={item.descricao}
                nome={item.nome}
                valor={item.valor}
              />
            )
          })}
        </Products>
        <Checkout>
          <TotalOfProducts>
            <p>Total</p>
            <p>99,90</p>
          </TotalOfProducts>
          <button>Finalizar Compra</button>
        </Checkout>
      </Content>
    </Dialog.Portal>
  )
}
