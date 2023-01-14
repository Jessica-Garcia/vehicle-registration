import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(
    to right top,
    ${(props) => props.theme["blue-200"]},
    ${(props) => props.theme["purple-300"]}
  );
  color: ${(props) => props.theme["gray-100"]};
  position: fixed;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.5rem;
`;
export const BorderStyle = styled.div`
  border-top: 6rem solid transparent;
  border-right: 100vw solid ${(props) => props.theme["blue-50"]};
`;
