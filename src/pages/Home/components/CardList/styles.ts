import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1210px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
