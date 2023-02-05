import * as Dialog from '@radix-ui/react-dialog'
import { NewRestaurantModal } from '../NewRestaurantModal'
import { ContainerHeader, ContainerSearch, HomeLink, SearchBar } from './styles'
import {
  PlusCircle,
  Bookmark,
  MagnifyingGlass,
  ShoppingCart,
} from 'phosphor-react'
import { ShoppingCartModal } from '../ShoppingCartModal'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <ContainerHeader>
      <HomeLink to={'/'}>
        <h1>Food App</h1>
      </HomeLink>
      <ContainerSearch>
        <MagnifyingGlass size={20} color="#3C3C3C" weight="thin" />
        <SearchBar
          type="text"
          name=""
          id=""
          placeholder="Busque por restaurantes"
        />
      </ContainerSearch>

      <div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <PlusCircle size={45} color="#DBF227" />
          </Dialog.Trigger>
          <NewRestaurantModal />
        </Dialog.Root>

        <NavLink to={'/shopping'}>
          <Bookmark size={45} color="#DBF227" />
        </NavLink>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ShoppingCart size={45} color="#DBF227" />
          </Dialog.Trigger>
          <ShoppingCartModal />
        </Dialog.Root>
      </div>
    </ContainerHeader>
  )
}
