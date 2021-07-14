import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 50px;

  margin: 50px 0;
  padding: 10px;

  border-radius: 5px;

  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
