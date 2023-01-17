import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(
    to right top,
    ${(props) => props.theme["blue-200"]},
    ${(props) => props.theme["purple-300"]}
  );
  //color: ${(props) => props.theme["gray-100"]};
  position: fixed;
  //border: solid rebeccapurple 3px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
  height: 3rem;
  position: relative;
  top: 0.5rem;
  //border: solid rebeccapurple 3px;
  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      height: 2.8rem;
      width: 2.8rem;
      font-size: 1.3rem;
      border: solid ${(props) => props.theme.white} 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 80%;
      font-weight: bold;
      background: ${(props) => props.theme["blue-300"]};
      text-decoration: none;
      color: ${(props) => props.theme.white};
    }
    span {
      height: 2.8rem;
      width: 2.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      //font-weight: bold;
      font-size: 1.6rem;
    }
  }

  button {
    border: none;
    height: 2.1rem;
    width: 6rem;
    font-size: 0.8125rem;
    border-radius: 15px;
    background: ${(props) => props.theme["purple-100"]};
    opacity: 0.8;
    color: ${(props) => props.theme.white};
  }
`;
export const BorderStyle = styled.div`
  border-top: 6rem solid transparent;
  border-right: 100vw solid ${(props) => props.theme["blue-50"]};
`;
