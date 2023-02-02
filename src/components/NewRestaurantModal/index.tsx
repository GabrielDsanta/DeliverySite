import * as z from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Overlay, Content, Inputs, CloseButton } from './styles'
import { X } from 'phosphor-react'
const newRestaurantFormSchema = z.object({
  name: z.string(),
  category: z.string(),
  about: z.string(),
  urlLogo: z.string(),
})

type newRestaurantInputs = z.infer<typeof newRestaurantFormSchema>

export function NewRestaurantModal() {
  const { register, handleSubmit, reset } = useForm<newRestaurantInputs>({
    resolver: zodResolver(newRestaurantFormSchema),
  })

  function handleCreateNewRestaurant(data: newRestaurantInputs) {
    console.log(data)
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
            <input type="text" id="name" required {...register('name')} />

            <label htmlFor="">Categoria:</label>
            <input
              type="text"
              id="category"
              required
              {...register('category')}
            />

            <label htmlFor="urlLogo">Url da logo:</label>
            <input type="text" id="urlLogo" required {...register('urlLogo')} />
          </Inputs>
          <Inputs>
            <label htmlFor="about">Sobre:</label>
            <textarea id="about" required {...register('about')}></textarea>
            <button type="submit">Cadastrar</button>
          </Inputs>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
