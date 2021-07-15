import styled from 'styled-components';

export const Container = styled.div`
  height: 30px;

  padding: 8px;
  margin-bottom: 10px;

  text-align: center;
  background-color: ${(props) => props.theme.colors.secondary};

  border-radius: 5px;
`;

export const Badge = styled.span``;
