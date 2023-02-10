import styled from "styled-components";

export const VehicleInfo = styled.main`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};

  position: fixed;

  /* Centralizar na tela */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    label {
      font-size: 1.1rem;
      font-weight: 700;
    }
    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme["blue-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["blue-600"]};
        transition: background-color 0.2s;
      }
    }

    a {
      color: ${(props) => props.theme["gray-300"]};
      font-weight: bold;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      cursor: pointer;
      font-size: 1.2rem;

      &:hover {
        opacity: 0.6;
        transition: background-color 0.2s;
      }
    }
  }
`;

export const ButtonsContainer = styled.div``;
