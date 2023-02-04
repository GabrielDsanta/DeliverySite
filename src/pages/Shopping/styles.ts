import styled from 'styled-components'

export const ContainerMyShopping = styled.div`
  width: 65vw;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme['dark-grey']};
`
export const Products = styled.div`
  color: black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  overflow: hidden;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    width: 4px;
    height: 0.5rem;
    background-color: white;
  }
  &&::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 6px;
  }
`
