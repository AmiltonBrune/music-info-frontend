import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 20px;
  margin-top: 10px;

  cursor: pointer;

  > svg {
    width: 25px;
    height: 25px;

    color: ${(props) => props.theme.colors.black};
  }

  > span {
    font-size: 20px;
    color: ${(props) => props.theme.colors.black};

    margin-left: 10px;
  }
`;
