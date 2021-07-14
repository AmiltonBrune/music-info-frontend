import styled from 'styled-components';

export const Container = styled.div`
  grid-area: L;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    'H'
    'CT'
    'F';

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.header`
  grid-area: H;
  padding: 30px;
`;

export const Logo = styled.img`
  width: 180px;
  height: 60px;
`;

export const Content = styled.main`
  grid-area: CT;

  height: 40vh;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentImage = styled.img`
  width: 500px;
  height: 500px;
`;

export const Footer = styled.footer`
  grid-area: F;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 25px;
    color: ${(props) => props.theme.colors.white};
  }
`;
