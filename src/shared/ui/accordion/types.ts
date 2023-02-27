import React, { ReactNode } from 'react';

export interface ToggleProps {
  isExpanded: boolean
  title: string
  toggleHandler: () => void
}

export interface IAccordionProps {
  isOpen?: boolean
  children: ReactNode
  title: string
  renderToggle?: React.FC<ToggleProps>
  renderBody?: React.FC<any>
}
