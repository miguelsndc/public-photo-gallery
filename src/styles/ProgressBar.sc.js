import styled from 'styled-components';

export const StyledProgressBar = styled.div`
  width: ${(props) => props.progressWidth}%;
  height: 5px;
  margin-top: 20px;
  background: ${(props) => props.theme.primary};
  border-radius: 4px;
`;
