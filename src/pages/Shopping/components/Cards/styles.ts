import styled from 'styled-components'

export const ContainerCards = styled.div`
  width: 25rem;
  height: auto;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  background: ${(props) => props.theme.white};
  @media (max-width: 1250px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export const Information = styled.div`
  width: 100%;

  gap: 1rem;
  margin: 1rem 1rem 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: start;

  img {
    margin-left: 1rem;
  }
`
export const Products = styled.div`
  width: 100%;
  border-top: 2px solid black;
`
