import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px 10px 10px;
  margin-bottom: 30px;

  border: 1.58px solid ${(props) => props.theme.colors.yellow40};
  border-radius: 5px;

  cursor: pointer;

  transition: 0.1s ease-out;

  > svg {
    width: 25px;
    height: 25px;

    fill: ${(props) => props.theme.colors.tertiary};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    border: none;

    > div > div > p {
      color: ${(props) => props.theme.colors.white};
    }

    > svg {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Information = styled.div`
  > p {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black};

    margin-bottom: 10px;
  }

  > span {
    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.info};
  }
`;

export const Photo = styled.img`
  width: 60px;
  height: 60px;

  margin-right: 10px;

  border-radius: 5px;
`;
