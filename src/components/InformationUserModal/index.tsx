import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { DeliveryContext } from '../../context/DeliveryContext'
import { Overlay, Content, CloseButton, Submit } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newUserFormSchema = z.object({
  nome: z.string(),
  endereço: z.string(),
  numero: z.string(),
})

type newUserInputs = z.infer<typeof newUserFormSchema>

export function InformationUserModal() {
  const { CallSetDefaultValueOrder } = useContext(DeliveryContext)

  const { register, handleSubmit, reset } = useForm<newUserInputs>({
    resolver: zodResolver(newUserFormSchema),
  })

  function HandleResetCart() {
    reset()
    CallSetDefaultValueOrder()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={22} />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(HandleResetCart)}>
          <label htmlFor="">Nome</label>
          <input type="text" id="nome" {...register('nome')} />
          <label htmlFor="">Endereço</label>
          <input type="text" id="endereço" {...register('endereço')} />
          <label htmlFor="">Numero</label>
          <input type="text" id="numero" {...register('numero')} />

          <Submit to={'/shopping'}>
            <button onClick={HandleResetCart}>Finalizar Pedido</button>
          </Submit>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
