import styled from "styled-components";

export const VehicleInfo = styled.main`
  min-width: 32rem;
  border-radius: 6px;
  padding: 0.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};
  position: fixed;

  /* Centralizar na tela */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    /* margin-top: 2rem;
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
    } */
  }
`;

export const InfoContainer = styled.div`
  min-width: 32rem;
  border-radius: 6px;
  padding: 1rem 3rem;
  background: ${(props) => props.theme["gray-800"]};
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  div {
    border: 0;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 2rem 1rem;
    width: 35rem;
    height: 5rem;

    label {
      font-size: 1.3rem;
      font-weight: 700;
      margin: 20px;
    }
    span {
      font-size: 1.2rem;
    }
  }

  div:first-child {
    margin-top: 2rem;
  }

  a {
    color: ${(props) => props.theme["gray-300"]};
    font-weight: bold;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 1.2rem;
    //margin: 30px 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
      transition: background-color 0.2s;
    }
  }
`;

export const OptionButtonsContainer = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 30px;

  span {
    width: 120px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px ${(props) => props.theme["gray-900"]};
    cursor: pointer;
  }

  span:first-child {
    a {
      color: ${(props) => props.theme["blue-500"]};
      font-size: 1rem;
    }
  }

  span:nth-of-type(2) {
    a {
      color: ${(props) => props.theme.yellow};
      font-size: 1rem;
    }
  }

  span:last-child {
    font-weight: bold;
    color: ${(props) => props.theme["red-300"]};
    font-size: 1rem;
    gap: 0.5rem;
    &:hover {
      opacity: 0.8;
    }
  }
`;
