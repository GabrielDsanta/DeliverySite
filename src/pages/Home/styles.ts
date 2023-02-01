import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 65vw;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme['dark-grey']};
`
export const ContainerFilter = styled.div`
  width: 100%;

  margin-top: 1.25rem;
  margin-bottom: 2.5rem;

  display: flex;
  justify-content: space-around;

  select {
    width: 11.335rem;
    height: 2.1488rem;

    border-radius: 6px;
    border: 0.5px solid black;

    color: black;
    background: transparent;
  }
`
export const ContainerRestaurants = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
