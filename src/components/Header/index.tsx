import * as Dialog from '@radix-ui/react-dialog'
import { NewRestaurantModal } from '../NewRestaurantModal'
import {
  ContainerHeader,
  ContainerSearch,
  HomeLink,
  SearchBar,
  ContainerToGoBack,
} from './styles'
import {
  PlusCircle,
  Bookmark,
  MagnifyingGlass,
  ShoppingCart,
  ArrowBendDownLeft,
} from 'phosphor-react'
import { ShoppingCartModal } from '../ShoppingCartModal'
import { NavLink } from 'react-router-dom'
import { ChangeEvent, useContext } from 'react'
import { DeliveryContext } from '../../context/DeliveryContext'

interface HeaderProps {
  icons: 'Home' | 'Product' | 'Shopping'
}

export function Header({ icons }: HeaderProps) {
  const { CallSetSearchFilter } = useContext(DeliveryContext)

  return (
    <ContainerHeader>
      <HomeLink to={'/'}>
        <h1>Food App</h1>
      </HomeLink>
      {icons !== 'Product' ? (
        <ContainerSearch>
          <MagnifyingGlass size={20} color="#3C3C3C" weight="thin" />
          <SearchBar
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              CallSetSearchFilter(e.target.value)
            }
            type="text"
            name=""
            id=""
            placeholder="Busque por restaurantes"
          />
        </ContainerSearch>
      ) : (
        <ContainerToGoBack to={'/'}>
          <ArrowBendDownLeft size={20} color="#ededed" weight="light" />
          Restaurantes
        </ContainerToGoBack>
      )}

      <div>
        {icons === 'Home' && (
          <>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <PlusCircle size={45} color="#DBF227" />
              </Dialog.Trigger>
              <NewRestaurantModal />
            </Dialog.Root>

            <NavLink to={'/shopping'}>
              <Bookmark size={45} color="#DBF227" />
            </NavLink>
          </>
        )}
        {icons === 'Product' && (
          <>
            <NavLink to={'/shopping'}>
              <Bookmark size={45} color="#DBF227" />
            </NavLink>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <ShoppingCart size={45} color="#DBF227" />
              </Dialog.Trigger>
              <ShoppingCartModal />
            </Dialog.Root>
          </>
        )}
        {icons === 'Shopping' && (
          <NavLink to={'/shopping'}>
            <Bookmark size={45} color="#DBF227" />
          </NavLink>
        )}
      </div>
    </ContainerHeader>
  )
}
