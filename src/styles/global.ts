import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }

   :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
   }

   body {
        background: ${(props) => props.theme['purple-900']};
        color: ${(props) => props.theme['gray-100']};
   }

   body, input, textarea, button {
        font-family: 'Oxygen', sans-serif;
        font-weight: 400;
        font-size: 1rem;
   }
`
