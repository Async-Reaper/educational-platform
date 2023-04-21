import React from 'react';

interface Props {
  children: JSX.Element
}
const Component = ({ children }: Props) => children;

export const RequireAuth = Component;
