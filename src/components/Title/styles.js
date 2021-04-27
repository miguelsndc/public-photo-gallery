import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: ${(props) => props.theme.primary};
    font-size: 1rem;
    letter-spacing: 1px;
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

export const Toggler = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:focus {
    outline: 0;
  }

  height: 32px;
  width: 52px;
  border-radius: 16px;
  display: inline-block;
  position: relative;
  margin: 0;
  border: 2px solid #474755;
  background: linear-gradient(180deg, #2d2f39 0%, #1f2027 100%);
  transition: all 0.2s ease;
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
  }
  &:checked {
    border-color: ${(props) => props.theme.primary};
  }
  &:checked:after {
    transform: translatex(20px);
  }
`;
