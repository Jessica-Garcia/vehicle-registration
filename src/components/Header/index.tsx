import { HeaderContainer, HeaderContent } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <a href="/">
            <span>LOGO</span>
          </a>
        </div>
        <button>Sign Up</button>
      </HeaderContent>
    </HeaderContainer>
  );
};
