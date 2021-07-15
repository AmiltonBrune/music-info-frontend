import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 170px;
  height: 210px;

  padding: 10px;

  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.white};

  cursor: pointer;

  transition: 0.1s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.black};

    > p {
      color: ${(props) => props.theme.colors.lightGray};
    }

    > span {
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;

export const Img = styled.img`
  width: 140px;
  height: 140px;

  align-self: center;

  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Title = styled.p`
  max-width: 150px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.black};

  margin: 0 0 5px 5px;
`;

export const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.gray};

  margin-left: 5px;
`;
