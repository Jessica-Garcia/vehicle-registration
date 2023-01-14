import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }

   html{
     display: flex;
     flex-direction: column;
   }

   :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["purple-100"]};
   }

   body {
        background: linear-gradient(to right bottom, 
          ${(props) => props.theme["blue-200"]}, 
          ${(props) => props.theme["purple-300"]},
          ${(props) => props.theme["purple-100"]}
          );
        color: ${(props) => props.theme["gray-100"]};
   }

   body, input, textarea, button {
        font-family: 'Oxygen', sans-serif;
        font-weight: 400;
        font-size: 1rem;
   }
`;
