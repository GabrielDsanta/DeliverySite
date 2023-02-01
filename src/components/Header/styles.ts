import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  height: 3.4431rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['blue-dark']};

  h1 {
    margin-left: 0.5rem;
  }

  div {
    margin-right: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const ContainerSearch = styled.div`
  height: 1.74rem;
  width: 16.3687rem;

  border-radius: 6px;

  background: ${(props) => props.theme.white};

  svg {
    margin-left: 0.5rem;
  }
`
export const SearchBar = styled.input`
  height: 1.125rem;
  width: 13.9431rem;
  margin-left: 0.875rem;

  margin-top: 0.25rem;
  margin-bottom: 0.25rem;

  border: 0;
  outline: none;

  color: #a5a4a4;

  &::placeholder {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 18px;
  }
`
