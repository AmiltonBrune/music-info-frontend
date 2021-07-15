import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 130px;

  padding: 15px;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;

  position: absolute;
  top: 60px;
  right: 30px;

  z-index: 1;
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;

    color: ${(props) => props.theme.colors.black};
  }
`;
