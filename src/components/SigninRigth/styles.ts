import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 450px;
  height: 400px;

  padding: 30px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const InputContainer = styled.div`
  position: relative;

  > img {
    position: absolute;
    top: 28px;
    left: 20px;
  }

  > input[type='email'] {
    padding-left: 70px;
  }

  > input[type='password'] {
    padding-top: 15px;
    padding-left: 70px;
    font-size: 16px;
  }
`;

export const MessageContainer = styled.div`
  text-align: center;
  font-size: 20px;

  > span > b {
    color: ${(props) => props.theme.colors.primary};
  }
`;
