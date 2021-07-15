import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 440px;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.secondary};

  padding: 10px;

  z-index: 1;
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  cursor: pointer;

  > svg {
    width: 50px;
    height: 50px;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};

    padding: 10px;

    border-radius: 5px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  > button {
    width: 160px;
    height: 50px;

    margin-top: 20px;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;

  margin-bottom: 20px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 50px;

  > span {
    font-size: 18px;
    margin-left: 15px;
  }

  > img {
    width: 30px;
  }
`;

export const MenuItens = styled.div`
  padding: 50px;
`;

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100px;

  padding: 50px;

  position: relative;

  cursor: pointer;
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }

  > svg {
    width: 40px;
    height: 40px;

    color: ${(props) => props.theme.colors.tertiary};
    margin-bottom: 10px;
  }
`;
