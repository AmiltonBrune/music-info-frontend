import React from 'react';

import Logo from 'components/Logo';
import Input from 'components/Input';
import menuIcon from '../../assets/menu.svg';
import searchIcon from '../../assets/search.svg';

import { Container, Menu, Img, InputContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <InputContainer>
        <img src={searchIcon} alt='Menu' />
        <Input type='search' placeholder='Pesquisar...' />
      </InputContainer>
      <Menu>
        <Img src={menuIcon} alt='Menu' />
      </Menu>
    </Container>
  );
};

export default Header;
