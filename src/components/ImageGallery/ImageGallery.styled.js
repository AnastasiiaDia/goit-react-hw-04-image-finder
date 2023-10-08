import styled from '@emotion/styled';
const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;

  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export { Gallery };
