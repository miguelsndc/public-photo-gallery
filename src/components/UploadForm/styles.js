import styled from 'styled-components';

export const FormField = styled.form`
  margin: 30px auto 10px;
  text-align: center;
`;

export const Error = styled.div`
  color: ${(props) => props.theme.error};
`;

export const ProgressInfo = styled.div`
  height: 60px;
  font-size: 0.8rem;
`;

export const UploadButton = styled.label`
  display: block;
  width: 40px;
  height: 40px;
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  margin: 10px auto;
  line-height: 38px;
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
`;
