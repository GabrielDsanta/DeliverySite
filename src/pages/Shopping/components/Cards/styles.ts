import styled from 'styled-components'

export const ContainerCards = styled.div`
  margin: 1rem;
  width: 25rem;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  background: ${(props) => props.theme.white};
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
