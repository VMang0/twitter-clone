import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 100%;
  max-width: 450px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  &:not(:empty)::before {
    margin-right: 0.8em;
  }

  &:not(:empty)::after {
    margin-left: 0.8em;
  }
`;
