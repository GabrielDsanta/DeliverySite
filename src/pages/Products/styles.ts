import styled from 'styled-components'

export const ContainerProducts = styled.div`
  width: 65vw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme['dark-grey']};

  h1 {
    margin-top: 1rem;
    color: black;
  }
`

export const RestaurantInformation = styled.div`
  width: 90%;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: start;

  background: ${(props) => props.theme.white};

  img {
    margin: 1rem;
  }

  h1 {
    margin-right: 1rem;

    font-size: 3rem;
    font-weight: 600;
    line-height: 42px;

    color: #3c3c3c;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3rem;
    font-weight: 600;
    line-height: 42px;

    color: ${(props) => props.theme.yellow};
  }

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export const ProductList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
