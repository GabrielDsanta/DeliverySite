import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { useTotal } from '../../hooks/useTotal'
import { CardProductCart } from '../CardProductCart'
import { DeliveryContext } from '../../context/DeliveryContext'
import {
  Content,
  Overlay,
  CloseButton,
  Products,
  TotalOfProducts,
  Checkout,
} from './styles'

export function ShoppingCartModal() {
  const total = useTotal()
  const { cart } = useContext(DeliveryContext)

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={22} /> Seus Pedidos
        </CloseButton>
        <Products>
          {cart?.length! > 0 && (
            cart!.map((item) => {
              return (
                <CardProductCart
                  key={item.id}
                  amount={item.amount}
                  id={item.id}
                  product={item.product}
                />
              )
            })
          )}
        </Products>
        <Checkout>
          <TotalOfProducts>
            <p>Total</p>
            {total !== undefined && (
              <p>{total!.total}</p>
            )}
          </TotalOfProducts>
          <button>Finalizar Compra</button>
        </Checkout>
      </Content>
    </Dialog.Portal>
  )
}
