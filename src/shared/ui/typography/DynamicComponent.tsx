import React from 'react';
import styled from 'styled-components';
import {
  fontSize, color, fontWeight, compose,
} from 'styled-system';

const StyledDynamicComponent = styled('p')(
  compose(color, fontSize, fontWeight),
);

const DynamicComponent: React.FC<any> = ({ tag, children, ...props }) => {
  props.color = `var(--color-${props.color})`;
  return (
     <StyledDynamicComponent as={tag} {...props}>
        {children}
     </StyledDynamicComponent>
  );
};

DynamicComponent.defaultProps = {
  color: 'black',
  fontWeight: 600,
};

export default React.memo(DynamicComponent);
