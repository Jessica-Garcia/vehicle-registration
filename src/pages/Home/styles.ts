import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const Title = styled.div`
  align-self: center;
  margin: 2rem 0;
  display: flex;
  gap: 1rem;

  h2 {
    color: ${(props) => props.theme["blue-500"]};
  }

  button {
    background: ${(props) => props.theme["blue-400"]};

    color: ${(props) => props.theme.white};
    font-weight: bold;
    height: 2rem;
    width: 2rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme["blue-600"]};

      transition: background 0.3s;
    }
  }
`;

export const VehicleTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  margin-top: 1.2rem;

  th {
    padding: 1rem 2rem;
    background: ${(props) => props.theme["blue-600"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  td {
    text-align: center;
    padding: 1rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const ButtonAndPagination = styled.section`
  display: flex;

  justify-content: flex-end;
  border: solid red 3px;
  align-items: center;
  gap: 250px;
  span {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    justify-content: center;
    height: 35px;
    border: solid blue 3px;

    button {
      width: 2rem;
      height: 2rem;
      border-radius: 6px;
    }
  }

  /* a {
    justify-self: flex-end;
    text-decoration: none;
    border-radius: 6px;
    height: 50px;
    border: 0;
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme.white};
    padding: 0 1.25rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    //margin-bottom: 1rem;
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme["blue-600"]};
      transition: background 0.3s;
    }
  } */
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  height: 35px;
  border: solid blue 3px;
  align-self: center;
  button {
    width: 2rem;
    height: 2rem;
    border-radius: 6px;
  }
`;

export const AddButton = styled.a`
  display: flex;
  border-radius: 6px;
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["blue-500"]};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-end;

  //margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme["blue-600"]};
    transition: background 0.3s;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.5rem;
`;
