import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { BsPlusSquare } from 'react-icons/bs';

import Button from 'components/Button';
import EditUser from 'components/EditUser';

import user from '../../assets/user.svg';
import music from '../../assets/music.svg';
import disc from '../../assets/disc.svg';

import {
  Container,
  Close,
  Profile,
  Img,
  MenuItem,
  MenuItens,
  MenuButtons,
  MenuButton,
} from './styles';

interface IViewLetterProps {
  toggle(): void;
  hide: boolean;
}

const Menu: React.FC<IViewLetterProps> = ({ hide, toggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {hide && (
        <Container>
          <Close onClick={toggle}>
            <CgClose />
          </Close>
          <Profile>
            <Img src={user} alt='User' />
            <h3>Amilton Brune</h3>
            <Button onClick={toggleIsOpen}>Editar</Button>
          </Profile>
          <MenuItens>
            <MenuItem>
              <img src={music} alt='Music' />
              <span>Músicas</span>
            </MenuItem>
            <MenuItem>
              <img src={disc} alt='Disc' />
              <span>Álbuns</span>
            </MenuItem>
          </MenuItens>
          <MenuButtons>
            <MenuButton>
              <BsPlusSquare />
              <span>Adicionar Álbum</span>
            </MenuButton>
            <MenuButton>
              <BsPlusSquare />
              <span>Adicionar Música</span>
            </MenuButton>
          </MenuButtons>
          <EditUser hide={isOpen} toggle={toggleIsOpen}></EditUser>
        </Container>
      )}
    </>
  );
};

export default Menu;
