import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  inset: 0;
  position: fixed;

  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  width: 35rem;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  border: 0;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  top: 50%;
  left: 84%;
  position: fixed;
  transform: translate(-50%, -50%);

  color: black;
  background: ${(props) => props.theme['dark-grey']};
`
export const CloseButton = styled(Dialog.Close)`
  gap: 1rem;
  display: flex;
  align-items: center;

  color: black;
  background: transparent;

  font-weight: 400;
  font-size: 1.375rem;

  border: 0;
  top: 1.5rem;
  left: 1.5rem;
  line-height: 0;
  position: absolute;

  cursor: pointer;

  &:hover {
    svg {
      color: red;
    }
  }
`
export const Products = styled.div`
  display: flex;

  flex-direction: column;
`

export const Checkout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  button {
    width: 20rem;
    height: 2.5rem;
    margin-top: 1rem;

    border: 0;
    outline: none;

    background: red;
    color: ${(props) => props.theme.white};
  }
`
export const TotalOfProducts = styled.div`
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 600;
  font-size: 1.5rem;
`
