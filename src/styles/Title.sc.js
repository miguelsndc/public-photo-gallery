import styled from 'styled-components';

export const StyledTitle = styled.div`
  h1 {
    color: ${(props) => props.theme.primary};
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: normal;
  }

  h2,
  p {
    text-align: center;
  }

  h2 {
    margin-top: 60px;
    font-size: 2.3rem;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
