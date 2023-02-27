import React, { ReactNode } from 'react';

export interface ToggleProps {
  isExpanded: boolean
  isNotification: boolean
  toggleHandler: () => void
}

export interface IAccordionProps {
  isOpen?: boolean
  notification: string[]
  isNotification: boolean
  renderToggle?: React.FC<ToggleProps>
  renderBody?: React.FC<any>
}
