import styled from 'styled-components';

export const Container = styled.div`
  grid-area: H;

  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px;
`;

export const Menu = styled.div`
  width: 50px;
  height: 50px;

  background-color: ${(props) => props.theme.colors.tertiary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  cursor: pointer;

  > svg {
    width: 50px;

    color: ${(props) => props.theme.colors.white};
  }
`;

export const InputContainer = styled.div`
  position: relative;

  > input[type='search'] {
    width: 700px;

    font-size: 18px;

    border: none;
    padding-left: 30px;
  }

  > img {
    width: 20px;
    height: 20px;

    position: absolute;
    top: 27px;
    right: 25px;
  }
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
`;
