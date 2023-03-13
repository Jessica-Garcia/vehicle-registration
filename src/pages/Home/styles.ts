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
  margin: 4rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  h2 {
    color: ${(props) => props.theme["blue-300"]};
  }
`;

export const VehicleTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  margin-top: 1.2rem;

  th {
    padding: 1rem 2rem;
    background: ${(props) => props.theme["blue-500"]};

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

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
  height: 35px;
  align-self: center;
  margin-top: 3rem;
  position: relative;
  bottom: 1.5rem;

  button {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 6px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["gray-600"]};
    border: 0;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["gray-400"]};

      transition: background 0.3s;
    }
  }
  span {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const AddButton = styled.button`
  display: flex;
  border-radius: 6px;
  height: 50px;
  width: 120px;
  justify-content: center;
  align-items: center;
  border: 0;
  background: ${(props) => props.theme["blue-500"]};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  font-weight: bold;
  cursor: pointer;

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
