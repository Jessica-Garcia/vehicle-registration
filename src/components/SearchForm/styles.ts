import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: -5.5rem;
  position: relative;

  input {
    flex: 1;
    height: 50px;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["blue-100"]};
    }
  }

  button[type="reset"] {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme["blue-100"]};
    font-weight: bold;
    position: absolute;
    right: 145px;
    top: 16px;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["blue-200"]};
    }

    &:active {
      color: ${(props) => props.theme["blue-600"]};
    }
  }

  button[type="submit"] {
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
      cursor: not-allowed;
      opacity: 0.8;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["blue-600"]};
      transition: background-color 0.3s;
    }
  }
`;
