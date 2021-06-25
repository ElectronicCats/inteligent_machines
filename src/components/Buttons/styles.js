import styled from 'styled-components';

export const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  width: 400px;
  height: 60px;
  margin: 10px;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : 'var(--highligth)'};
  border: none;
  border-radius: 30px;
  padding: 20px 30px;
  cursor: pointer;

  span {
    color: whitesmoke;
  }
  div {
    height: 2rem;
    text-align: center;
    width: 2rem;
    border-radius: 50%;
    font-size: 1.5rem;
    .internal {
      background-color: ${({ bgColor }) =>
        bgColor ? bgColor : 'var(--highligth)'};
    }
  }
`;
