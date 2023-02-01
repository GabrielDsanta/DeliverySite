import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 25rem;
  height: 7rem;

  margin-right: 1rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  color: black;
  background: ${(props) => props.theme.white};

  img {
    margin: 0.3125rem 1rem 0.3125rem 0.3125rem;
  }
`
export const RestaurantInformation = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    line-height: 20px;
    font-size: 1.3rem;
  }

  span {
    margin-top: 0.2rem;

    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 1rem;
    line-height: 16px;

    color: #a5a4a4;

    strong {
      margin-right: 0.3rem;

      font-weight: 600;
      line-height: 16px;
      font-size: 1rem;

      color: ${(props) => props.theme.yellow};
    }
  }

  p {
    margin-top: 0.5rem;

    font-weight: 400;
    line-height: 10px;
    font-size: 0.7rem;
  }
`
