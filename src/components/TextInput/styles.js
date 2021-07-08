import styled from 'styled-components';

export const InpuText = styled.input.attrs((props) => ({
  colorFocus: props.error
    ? 'var(--error)'
    : props.colorFocus || 'var(--secondary-color)',
}))`
  width: 300px;
  height: 35px;
  outline: none;
  margin-top: 5px;
  padding: 6px;
  font-size: var(--font-size);
  border: none;
  border-bottom-color: var(--color-darkgray);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  &:hover,
  &:active,
  &:focus {
    border-bottom-color: var(--color-blue);
  }
`;
export const LabelText = styled.label`
  color: var(--color-blue);
  font-size: var(--font-size);
`;
export const SpanError = styled.span`
  display: block;
  height: 20px;
  margin: 5px;
  color: var(--color-pink);
  font-size: 0.6rem;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
