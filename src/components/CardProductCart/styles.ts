import styled from 'styled-components'

export const ContainerCardProductCard = styled.div`
  width: 30rem;

  padding: 1rem;
  margin: 2rem 1rem 1rem 0;

  border-radius: 6px;

  background: ${(props) => props.theme.white};

  button {
    color: red;
    border: 0;
    outline: none;
    cursor: pointer;
    background: transparent;
  }
`
export const ValueAndQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 600;
  font-size: 1.5rem;
`
export const Description = styled.p`
  margin: 0.5rem 0 0.5rem 0;
  font-weight: 300;
  font-size: 1rem;
`
