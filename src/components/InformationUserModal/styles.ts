import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const InformationUser = styled.div``
export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  inset: 0;
  position: fixed;

  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  width: 35.5744rem;
  height: 18rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 6px;
  padding: 2.5rem 3rem;

  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);

  background: #3c3c3c;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    input {
      margin: 0.5rem 0 0.5rem 0;
      height: 1.5rem;
      border-radius: 4px;
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.yellow};
`
export const Submit = styled(NavLink)`
  width: 100%;
  outline: none;
  border: none;

  button {
    width: 100%;
  }
`
