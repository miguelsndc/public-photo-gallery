import styled from 'styled-components';

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
