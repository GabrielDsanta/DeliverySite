import styled from 'styled-components'

export const ContainerCardProduct = styled.div`
  width: 25rem;
  height: 11rem;
  margin: 1rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  background: ${(props) => props.theme.white};

  img {
    margin-right: 1rem;
    width: 100px;
    height: 100px;
    margin-top: 1rem;
  }
`
export const ProductInformation = styled.div`
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  h1 {
    font-weight: 600;
    font-size: 0.9375rem;
    line-height: 20px;
  }

  p {
    margin: 0.5rem 0 0.5rem 0;

    font-size: 12px;
    font-weight: 300;
    line-height: 130%;
  }
`
export const ValueAndQuantity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: #3c3c3c;
    font-weight: 400;
    line-height: 100%;
    font-size: 0.9375rem;
    margin-right: -5rem;
  }

  p {
    text-decoration: line-through;
    color: rgba(165, 164, 164, 1);
    font-weight: 400;
    line-height: 100%;
    font-size: 0.9375rem;
  }

  input {
    width: 3.75rem;
    height: 1.875rem;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .2rem;
  }
`
