import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 90%;
  max-height: 77.8vh;
  margin: 9.1rem auto 0 auto;
  display: flex;
  flex-direction: column;
  //border: solid red 5px;
  overflow-y: hidden;
`;

export const AddButton = styled.button`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  height: 2.5rem;
  width: 10rem;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 15px;
  background: ${(props) => props.theme["blue-200"]};
  margin-top: 1rem;
  color: ${(props) => props.theme.white};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme["blue-300"]};
  }
`;

export const Title = styled.div`
  background: ${(props) => props.theme["blue-50"]};
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  //border: solid blue 5px;
  padding: 1.5rem;
  justify-content: center;

  h2 {
    color: ${(props) => props.theme["blue-200"]};
    // border: green solid 3px;
  }

  button {
    // border: green solid 3px;
    border: none;
    background: ${(props) => props.theme["blue-50"]};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 0.8125rem;
    color: ${(props) => props.theme["blue-200"]};
    font-weight: bold;

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const TheadContainer = styled.thead`
  background: ${(props) => props.theme["blue-50"]};

  display: flex;
  padding: 1rem 0;
  width: 100%;
  //border: solid blueviolet 5px;

  tr {
    display: flex;
    flex: 1;
    padding-right: 0.6rem;

    th {
      color: ${(props) => props.theme["blue-200"]};
      flex-grow: 1;
      display: flex;
      justify-content: center;
      width: 100%;
      // border: solid black 2px;
    }
  }
`;

export const TbodyContainer = styled.tbody`
  //border: solid green 4px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 0.3rem 0.3rem;
  overflow-y: scroll;
  scrollbar-color: ${(props) => props.theme["blue-300"]};
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: ${(props) => props.theme["purple-300"]};
    border-radius: 20px;
  }

  tr {
    display: flex;
    gap: 1rem;

    td {
      flex-grow: 1;
      height: 2rem;
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme["purple-300"]};
      font-weight: bold;

      &:nth-of-type(5) {
        color: ${(props) => props.theme["pink-400"]};
      }
    }

    &:nth-child(even) td {
      background: ${(props) => props.theme["blue-100"]};
      align-items: center;
    }

    &:nth-child(odd) td {
      background: ${(props) => props.theme.white};
      height: 3rem;
      align-items: center;
    }

    &:nth-child(odd) td:first-child {
      height: 2rem;
      align-self: center;
    }

    & td:first-child {
      background: ${(props) => props.theme["blue-100"]};
      border-radius: 8px;
      color: ${(props) => props.theme["blue-400"]};
    }

    &:first-child td {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    &:last-child td {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-top: 0.2rem;
  border-radius: 8px;
  //border: solid ${(props) => props.theme["blue-400"]} 5px;

  height: 80%;

  table {
    width: 95%;
    height: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["blue-300"]};
    border-radius: 4px;
    width: 1.2rem;
    height: 1.2rem;

    &:nth-child(1) {
      color: ${(props) => props.theme["green-500"]};
    }
    &:nth-child(2) {
      color: ${(props) => props.theme.yellow};
    }
    &:nth-child(3) {
      color: ${(props) => props.theme.red};
    }

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;
