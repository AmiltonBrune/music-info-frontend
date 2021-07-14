import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;

  grid-template-areas: 'L R';

  height: 100vh;
`;
