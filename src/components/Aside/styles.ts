import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 20px;

  cursor: pointer;
`;

export const Photo = styled.img`
  width: 30px;
  height: 30px;

  margin-left: 10px;
`;

export const UserTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const Title = styled.h4`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};

  margin-left: 20px;
`;

export const ContainerMusic = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px 0 0 20px;
`;
