import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
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
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={22} /> Seus Pedidos
        </CloseButton>
        <Products>
          <CardProductCart />
          <CardProductCart />
          <CardProductCart />
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
