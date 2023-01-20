import styled from "styled-components";

export const VehicleInfo = styled.main`
  width: 90%;
  max-height: 77.8vh;
  margin: 9.1rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: solid red 5px;
  overflow-y: hidden;
  color: ${(props) => props.theme["blue-400"]};

  table {
    width: 95%;
    height: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

    thead {
      flex: 1;
      padding: 0 0.6rem;
      //border: solid brown 2px;
      width: 100%;
      margin-bottom: 1rem;

      th {
        color: ${(props) => props.theme["blue-200"]};
        flex-grow: 1;
        display: flex;
        justify-content: center;
        width: 100%;
        //border: solid black 2px;
      }
    }

    tbody {
      padding: 0 0.3rem 0.3rem;

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
          //margin-bottom: 0.5rem;
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
