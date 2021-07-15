import React, { useState } from 'react';

import Logo from 'components/Logo';
import Input from 'components/Input';
import MenuComponent from 'components/Menu';

import menuIcon from '../../assets/menu.svg';
import searchIcon from '../../assets/search.svg';

import { Container, Menu, Img, InputContainer } from './styles';

const Header: React.FC = () => {
  const [isHide, setIsHide] = useState(false);

  const toggleIsHide = () => {
    setIsHide(!isHide);
  };

  return (
    <Container>
      <Logo />
      <InputContainer>
        <img src={searchIcon} alt='Menu' />
        <Input type='search' placeholder='Pesquisar...' />
      </InputContainer>
      {!isHide && (
        <Menu onClick={toggleIsHide}>
          <Img src={menuIcon} alt='Menu' />
        </Menu>
      )}

      <MenuComponent hide={isHide} toggle={toggleIsHide} />
    </Container>
  );
};

export default Header;
