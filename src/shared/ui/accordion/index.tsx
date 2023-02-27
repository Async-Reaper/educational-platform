import React, { useState } from 'react';

import cls from './styles.module.scss';

import { IAccordionProps } from './types';
import { renderBodyDefault } from './renderBody';
import { renderToggleDefault } from './renderToggle';

const Component: React.FC<IAccordionProps> = ({
  isOpen = false,
  children,
  title,
  renderToggle = renderToggleDefault,
  renderBody = renderBodyDefault,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleHandler = () => setIsExpanded((prevState) => !prevState);

  return (
     <div className={cls.accordion}>
        {renderToggle({ isExpanded, title, toggleHandler })}
        {renderBody({ isExpanded, children, toggleHandler })}
     </div>
  );
};

export const Accordion = React.memo(Component);
