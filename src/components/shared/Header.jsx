import styled from 'styled-components';

const Header = () => {
  return (
    <StHeader>
      <StTitleContainer>
        <StTitle>Angular / Angular-cli</StTitle>
      </StTitleContainer>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  width: 100vw;
  height: 4rem;
  background-color: white;
  box-shadow: 0 4px 10px -4px black;
  align-items: center;
  justify-content: center;
`;

const StTitleContainer = styled.div`
  width: 100%;
  max-width: calc(1200px + 4rem);
  margin: 0 2rem;
`;

const StTitle = styled.h1`
  width: 100%;
  text-align: center;
`;
