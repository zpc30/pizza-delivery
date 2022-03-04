import styled from 'styled-components';

export const HelloContainer = styled.div(
  {
    padding: '0.5rem',
    fontSize: '2rem',
  },
  ({ theme, color }) => ({
    color: color ? color : theme.color,
  })
);
