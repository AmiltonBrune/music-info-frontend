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

export const Content = styled.div`
  margin-top: 30px;
  padding: 30px;

  > div > input {
    border: none;
  }
`;
