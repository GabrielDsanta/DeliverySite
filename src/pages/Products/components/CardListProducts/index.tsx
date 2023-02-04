import { Food } from '../../../../models/food'
import { CardProduct } from '../CardProduct'
import { ContainerCardListProducts } from './styles'

interface CardListProductsProps {
    foods: Food[] | null
}

export function CardListProducts({ foods }: CardListProductsProps) {
    return (
        <ContainerCardListProducts>
            {foods?.length! > 0 &&
                foods!.map((item) => {
                    return (
                        <CardProduct
                            descricao={item.descricao}
                            id={item.id}
                            idRestaurante={item.idRestaurante}
                            nome={item.nome}
                            url={item.url}
                            key={item.id}
                            promocao={item.promocao}
                            valor={item.valor}
                            valorPromocional={item.valorPromocional}
                        />
                    )
                })}
        </ContainerCardListProducts>
    )
}