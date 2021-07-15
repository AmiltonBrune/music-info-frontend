import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: auto;

  grid-template-areas: 'L  R';
  margin-bottom: 20px;
`;

export const ContainerContent = styled.div`
  grid-area: L;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas: 'LC  RC';

  width: 100%;
  height: 200px;

  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 10px 0 0 10px;

  position: relative;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 200px;

  padding: 20px;
`;

export const Rigth = styled.div`
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImage = styled.div`
  grid-area: R;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.secondary};

  border-radius: 0 10px 10px 0;
`;

export const Img = styled.img`
  width: 180px;
  height: 180px;
`;

export const Capa = styled.img`
  width: 180px;
  height: 180px;

  position: absolute;
  right: 150px;

  border-radius: 5px;

  z-index: 1;
`;

const discAnimation = keyframes`
    to{
      transform: rotate(360deg);
    }
 `;

export const Disc = styled.img`
  position: absolute;
  right: 30px;
  animation: ${discAnimation} 8s linear infinite;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 310px;
  height: 100px;

  > button {
    width: 250px;
    height: 50px;
  }
`;

export const ButtonIcon = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  cursor: pointer;

  > svg {
    width: 40px;
    height: 40px;
  }
`;

export const ContainerTitle = styled.div`
  > h2 {
    color: ${(props) => props.theme.colors.tertiary};
  }

  > span {
    font-weight: 300;
    color: ${(props) => props.theme.colors.info};
  }
`;
