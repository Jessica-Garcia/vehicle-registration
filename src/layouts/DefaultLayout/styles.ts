import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: calc(100vh - 2.5rem);
  width: 100%;
  overflow: auto;
  background: ${(props) => props.theme["blue-50"]};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  //border-left: 1px solid ${(props) => props.theme["purple-300"]};

  scrollbar-width: thin;
  scrollbar-color: transparent;

  &::-webkit-scrollbar {
    width: 1px;
    height: 0.5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
