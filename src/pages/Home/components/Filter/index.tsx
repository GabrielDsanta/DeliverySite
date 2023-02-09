import { SyntheticEvent, useContext } from 'react'
import { DeliveryContext } from '../../../../context/DeliveryContext'
import { ContainerFilter } from './styles'

export function Filter() {
  const { CallSetFilter, CallSetRate } = useContext(DeliveryContext)

  return (
    <ContainerFilter>
      <select
        onChange={(e: SyntheticEvent<HTMLSelectElement>) =>
          CallSetFilter(e.currentTarget.value)
        }
        name=""
        id=""
      >
        <option value="" selected>
          Categoria
        </option>
        <option value="Japonesa">Japonesa</option>
        <option value="Lanches">Lanches</option>
        <option value="Brasileira">Brasileira</option>
        <option value="Pizza">Pizza</option>
      </select>

      <select
        onChange={(e: SyntheticEvent<HTMLSelectElement>) =>
          CallSetRate(e.currentTarget.value)
        }
        name=""
        id=""
      >
        <option value="" selected>
          Ordenar
        </option>
        <option value="Melhor Avalição">Melhor Avalição</option>
        <option value="Pior Avalição">Pior Avalição</option>
      </select>
    </ContainerFilter>
  )
}
