import React from 'react';
import { CgClose } from 'react-icons/cg';

import { Container, Close } from './styles';

interface IDropMenuProps {
  toggle(): void;
  visible: boolean;
}

const DropMenu: React.FC<IDropMenuProps> = ({ children, visible, toggle }) => {
  return (
    <>
      {visible && (
        <Container>
          <Close onClick={toggle}>
            <CgClose />
          </Close>
          {children}
        </Container>
      )}
    </>
  );
};

export default DropMenu;
