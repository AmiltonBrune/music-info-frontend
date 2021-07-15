import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 440px;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.white};

  padding: 10px;

  z-index: 1;

  overflow-y: scroll;

  > p {
    font-size: 18px;
    text-align: center;
    color: #4e4e4e;

    margin-top: 30px;
    padding: 20px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
  }
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

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 5px;
`;

export const ContainerTitle = styled.div`
  margin-left: 15px;

  > h3 {
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  }

  > span {
    font-weight: 300;
    color: ${(props) => props.theme.colors.gray};
  }
`;
