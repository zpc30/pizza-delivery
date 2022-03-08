import styled from 'styled-components';

export const Flex = styled.div(
  ({
    direction = 'row',
    align = 'flex-start',
    justify = 'unset',
    fullHeight,
    fullWidth,
  }) => ({
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    height: fullHeight ? '100%' : 'auto',
    width: fullWidth ? '100%' : 'auto',
  })
);
