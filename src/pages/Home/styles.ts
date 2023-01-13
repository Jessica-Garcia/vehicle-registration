import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 90%;
  margin: 15rem auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  h2:first-child {
    color: ${(props) => props.theme["blue-400"]};
    align-self: center;
  }
`;
export const Content = styled.div`
  flex: 1;
  margin-top: 2.5rem;

  table {
    width: 80%;
    border-collapse: collapse;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    th {
      color: ${(props) => props.theme["blue-200"]};
      flex-grow: 1;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    tr {
      display: flex;
      gap: 1rem;
    }

    tbody tr:nth-child(even) td {
      background: ${(props) => props.theme["blue-100"]};
      align-items: center;
    }

    tbody tr:nth-child(odd) td {
      background: ${(props) => props.theme.white};
      height: 5vh;
      align-items: center;
    }

    tbody tr:nth-child(odd) td:first-child {
      height: 3vh;
      align-self: center;
    }

    tbody tr td:first-child {
      background: ${(props) => props.theme["blue-100"]};
      border-radius: 8px;
      color: ${(props) => props.theme["blue-400"]};
    }

    tbody tr:first-child td {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    tbody tr:last-child td {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    td:last-child {
      color: ${(props) => props.theme["pink-400"]};
    }

    td {
      flex-grow: 1;
      height: 3vh;
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme["purple-300"]};
      font-weight: bold;
    }
  }
`;
