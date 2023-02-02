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

export const ContainerRestaurants = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
