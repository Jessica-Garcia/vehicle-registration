import styled from "styled-components";

export const NotFoundContainer = styled.div`
  border: 0;
  // background: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 2rem 1rem;
  width: 35rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  flex-direction: column;

  a {
    color: ${(props) => props.theme["gray-300"]};
    font-weight: bold;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 1.2rem;
    margin: 30px 20px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
      transition: background-color 0.2s;
    }
  }
`;
