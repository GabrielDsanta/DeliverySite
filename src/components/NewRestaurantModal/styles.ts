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
    margin-top: 1.25rem;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
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
export const Inputs = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.2rem;

    font-weight: 600;
    line-height: 16px;
    font-size: 1rem;
  }
  input {
    margin-bottom: 0.5rem;

    border: 0;
    outline: none;

    width: 12rem;
    height: 1.5rem;

    border-radius: 4px;
    background: #d9d9d9;
  }
  textarea {
    width: 10rem;
    height: 5rem;
    margin-bottom: 1.375rem;

    border: 0;
    resize: none;
    outline: none;
  }
  button[type='submit'] {
    width: 10rem;
    height: 1.5rem;

    border: 0;
    outline: none;
    border-radius: 2px;

    font-size: 1rem;
    font-weight: 400;
    line-height: 16px;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['blue-dark']};

    &:hover {
      cursor: pointer;
    }
  }
`
