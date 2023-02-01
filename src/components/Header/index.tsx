import { ContainerHeader, ContainerSearch, SearchBar } from './styles'
import { PlusCircle, Bookmark, MagnifyingGlass } from 'phosphor-react'
export function Header() {
  return (
    <ContainerHeader>
      <h1>Food App</h1>
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
        <PlusCircle size={45} color="#DBF227" />

        <Bookmark size={45} color="#DBF227" />
      </div>
    </ContainerHeader>
  )
}
