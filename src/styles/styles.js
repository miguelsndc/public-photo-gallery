import styled from 'styled-components';

export const theme = {
  primary: '#efb6b2',
  secondary: '#444444',
  background: '#fff',
  error: '#bd2525',
};

export const StyledTitle = styled.div`
  h1 {
    color: ${(props) => props.theme.primary};
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: normal;
  }

  h2,
  p {
    text-align: center;
  }

  h2 {
    margin-top: 60px;
    font-size: 2.6rem;
  }
`;

export const StyledUploadForm = styled.form`
  margin: 30px auto 10px;
  text-align: center;

  label {
    display: block;
    width: 40px;
    height: 40px;
    border: 3px solid ${(props) => props.theme.primary};
    border-radius: 50%;
    margin: 10px auto;
    line-height: 40px;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 24px;
    transition: all 0.2s;

    input {
      height: 0;
      width: 0;
      opacity: 0;
    }

    &:hover {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.background};
      cursor: pointer;
    }
  }

  .output {
    height: 60px;
    font-size: 0.8rem;

    .error {
      color: ${(props) => props.theme.error};
    }
  }
`;

export const StyledProgressBar = styled.div`
  width: ${(props) => props.progressWidth}%;
  height: 5px;
  margin-top: 20px;
  background: ${(props) => props.theme.primary};
  border-radius: 4px;
`;

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

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000004d;

  img {
    max-width: 60%;
    max-height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 5px 7px #0000004d;
    border-radius: 8px;
    user-select: none;
  }
`;
