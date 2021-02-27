import styled from 'styled-components';

export const StyledImageGrid = styled.div`
  column-count: 3;
  padding: 0;
  column-gap: 10px;
  font-size: 0.85em;

  .img-wrap {
    display: inline-block;
    padding: 10px 5px;
    width: 100%;
    box-sizing: border-box;
  }
  .img-wrap img {
    max-width: 100%;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 320px) {
    & {
      column-count: 1;
    }
  }

  @media (min-width: 321px) and (max-width: 768px) {
    & {
      column-count: 2;
    }
  }
`;
