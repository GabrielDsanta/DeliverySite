import { ContainerFilter } from "./styles";


export function Filter() {
  return (
    <ContainerFilter>
      <select name="" id="">
        <option value="" disabled selected>
          Categoria
        </option>
        <option value="">Japonesa</option>
        <option value="">Lanches</option>
        <option value="">Brasileira</option>
        <option value="">Pizza</option>
      </select>
      <select name="" id="">
        <option value="" disabled selected>
          Ordenar
        </option>
        <option value="">Melhor Avalição</option>
        <option value="">Pior Avalição</option>
      </select>
    </ContainerFilter>
  )
}