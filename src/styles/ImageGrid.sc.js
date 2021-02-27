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
    border-radius: 8px;
    box-shadow: 3px 5px 12px 5px rgba(0, 0, 0, 0.1);
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
