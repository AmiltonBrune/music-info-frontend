import React from 'react';

import { Container } from './styles';

interface IDropMenuItem {
  onClick(): void;
}

const DropMenuItem: React.FC<IDropMenuItem> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default DropMenuItem;
