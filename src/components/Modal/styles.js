import styled from 'styled-components';

export const Backdrop = styled.div`
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
