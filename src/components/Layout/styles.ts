import styled from 'styled-components';

/**
 * Layout
 * H = Header
 * AS = Aside
 * CT = Content
 */

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 440px;
  grid-template-rows: auto;

  grid-template-areas:
    'H  AS'
    'CT AS';

  height: 100vh;

  background-color: #f7f2ec;
`;
