import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1.5rem;
  align-items: center;

  div {
    border: 3px ${(props) => props.theme["blue-300"]} solid;
    background: transparent;

    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: none;
      color: ${(props) => props.theme["blue-500"]};
      font-weight: bold;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 3px ${(props) => props.theme["blue-300"]} solid;
    color: ${(props) => props.theme["blue-500"]};
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background-color: ${(props) => props.theme["blue-600"]};
      border-color: ${(props) => props.theme["blue-600"]};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    }
  }
`;
