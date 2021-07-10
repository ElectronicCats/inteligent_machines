import styled from 'styled-components';

export const LabelText = styled.label`
  color: var(--color-blue);
  margin-bottom: 0.625rem;
`;

export const TextareaInput = styled.textarea`
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-family: inherit;
  background-color: transparent;
  font-family: var(--default-font), sans-serif;
  font-size: var(--font-size);
`;

export const SpanError = styled.span`
  display: block;
  height: 20px;
  color: var(--color-pink);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
