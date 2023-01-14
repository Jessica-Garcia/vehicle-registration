import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 90%;
  height: 82vh;
  margin: 13rem auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  //border: solid red 5px;
  /* overflow-y: scroll;
  scrollbar-color: ${(props) => props.theme["blue-300"]};
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme["purple-300"]};

  &::-webkit-scrollbar {
    width: 4px;
    height: 0.5px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme["purple-300"]};
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["purple-300"]};
  }*/
`;

export const Title = styled.div`
  background: ${(props) => props.theme["blue-50"]};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 89%;

  //border: solid blue 5px;

  h2 {
    color: ${(props) => props.theme["blue-400"]};
  }
`;

export const TheadContainer = styled.div`
  background: ${(props) => props.theme["blue-50"]};

  display: flex;
  flex: 1;

  padding: 1rem 0;
  width: 73%;
  position: fixed;
  align-self: center;
  top: 17rem;
  //border: solid blueviolet 5px;
  height: 7.2vh;
  thead {
    flex: 1;
    th {
      color: ${(props) => props.theme["blue-200"]};
      flex-grow: 1;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-top: 2.5rem;
  //border: solid pink 5px;
  margin-bottom: 0.5rem;
  height: 60vh;

  table {
    width: 80%;
    height: 69vh;

    border-collapse: collapse;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 6rem 0 0 0;
    //border: yellow solid 3px;
    overflow-y: scroll;
    scrollbar-color: ${(props) => props.theme["blue-300"]};
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 8px;
      //height: 0.5px;
    }

    &::-webkit-scrollbar-track {
      //background: ${(props) => props.theme["blue-300"]};
      background: transparent;
      padding: 10px;
    }

    &::-webkit-scrollbar-thumb {
      width: 5px;

      background-color: ${(props) => props.theme["purple-300"]};
      border-radius: 20px;
    }

    tbody {
      tr {
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
    }

    tr {
      display: flex;
      gap: 1rem;

      td:nth-of-type(5) {
        color: ${(props) => props.theme["pink-400"]};
      }

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
      }
    }
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
      //background-color: ${(props) => props.theme["blue-300"]};
      //border-radius: 4px;
      //width: 1.3rem;
      //height: 1.3rem;
      color: ${(props) => props.theme.yellow};
    }
    &:nth-child(3) {
      //background-color: ${(props) => props.theme["blue-300"]};
      //border-radius: 4px;
      //width: 1.3rem;
      //height: 1.3rem;
      color: ${(props) => props.theme.red};
    }

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;
