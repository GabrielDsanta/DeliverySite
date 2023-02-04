import { PlusCircle } from 'phosphor-react'
import { useContext, useState } from 'react'
import { DeliveryContext } from '../../../../context/DeliveryContext'
import { Food } from '../../../../models/food'
import { v4 } from 'uuid'
import {
  ContainerCardProduct,
  ProductInformation,
  ValueAndQuantity,
} from './styles'
import { Order } from '../../../../models/order'

export function CardProduct({ descricao, nome, valor, valorPromocional, url, id, idRestaurante, promocao }: Food) {
  const { HandleAddCart } = useContext(DeliveryContext)
  const [amount, setAmount] = useState(0)

  function HandleAddProductCart() {
    setAmount(amount + 1)

    const newOrder: Order = {
      amount: amount,
      product: {
        descricao: descricao,
        id: id,
        idRestaurante: idRestaurante,
        nome: nome,
        promocao: promocao,
        url: url,
        valor: valor,
        valorPromocional: valorPromocional
      },
      id: v4()
    }

    HandleAddCart(newOrder)
  }

  return (
    <ContainerCardProduct>
      <ProductInformation>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <ValueAndQuantity>
          <h2>R$ {valor} </h2>
          {valorPromocional! > 0 && (
            <p >R$ {valorPromocional}</p>
          )}

          <button onClick={HandleAddProductCart}>
            <PlusCircle size={32} />
            <h4>{amount}</h4>
          </button>
        </ValueAndQuantity>
      </ProductInformation>
      <img src={url} alt="" />
    </ContainerCardProduct>
  )
}
