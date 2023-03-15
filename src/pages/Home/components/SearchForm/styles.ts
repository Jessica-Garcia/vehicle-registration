import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: -5.5rem;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["blue-100"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    height: 50px;
    width: 120px;
    border: 0;
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme.white};
    padding: 0 1.25rem;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["blue-600"]};
      transition: background-color 0.3s;
    }
  }
`;
