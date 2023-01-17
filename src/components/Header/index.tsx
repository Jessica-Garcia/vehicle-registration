import { HeaderContainer, ContentContainer, BorderStyle } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <div>
          <a href="">L</a>
          <span>LOGO</span>
        </div>
        <button>Sign Up</button>
      </ContentContainer>
      <BorderStyle></BorderStyle>
    </HeaderContainer>
  );
};
