import { Card } from '../../components/Card'
import { ContainerHome, ContainerFilter, ContainerRestaurants } from './styles'

export function Home() {
  return (
    <ContainerHome>
      <ContainerFilter>
        <select name="" id="">
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value=""></option>
        </select>
      </ContainerFilter>
      <h1>Restaurantes</h1>
      <ContainerRestaurants>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerRestaurants>
    </ContainerHome>
  )
}
