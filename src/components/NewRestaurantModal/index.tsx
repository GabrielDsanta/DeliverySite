import * as z from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Overlay, Content, Inputs, CloseButton } from './styles'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { DeliveryContext } from '../../context/DeliveryContext'
const newRestaurantFormSchema = z.object({
  nome: z.string(),
  categoria: z.string(),
  sobre: z.string(),
  url: z.string(),
  avaliacao: z.number(),
  id: z.number(),
})

type newRestaurantInputs = z.infer<typeof newRestaurantFormSchema>

export function NewRestaurantModal() {
  const { CreateNewRestaurants } = useContext(DeliveryContext)
  const { register, handleSubmit, reset } = useForm<newRestaurantInputs>({
    resolver: zodResolver(newRestaurantFormSchema),
  })

  function handleCreateNewRestaurant(data: newRestaurantInputs) {
    CreateNewRestaurants(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Cadastrar restaurante</Dialog.Title>

        <CloseButton>
          <X size={22} />
        </CloseButton>

        <form action="" onSubmit={handleSubmit(handleCreateNewRestaurant)}>
          <Inputs>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" required {...register('nome')} />

            <label htmlFor="">Categoria:</label>
            <input
              type="text"
              id="category"
              required
              {...register('categoria')}
            />

            <label htmlFor="urlLogo">Url da logo:</label>
            <input type="text" id="urlLogo" required {...register('url')} />
          </Inputs>
          <Inputs>
            <label htmlFor="about">Sobre:</label>
            <textarea id="about" required {...register('sobre')}></textarea>
            <button type="submit">Cadastrar</button>
          </Inputs>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
