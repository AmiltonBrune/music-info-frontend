import React, { useState } from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';

import CardFavoriteSongs from 'components/CardFavoriteSongs';
import DropMenu from 'components/DropMenu';
import DropMenuItem from 'components/DropMenuItem';

import userPhoto from '../../assets/user.svg';
import favoriteMusics from 'mocks/favoriteMusics';

import {
  Container,
  Photo,
  Profile,
  UserTitle,
  Title,
  ContainerMusic,
} from './styles';

const Aside: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const toggleIsHide = () => {
    setIsHide(!isHide);
  };

  return (
    <Container>
      <Profile onClick={toggleIsVisible}>
        <UserTitle>Amilton Brune</UserTitle>
        <Photo src={userPhoto} alt='User' />
      </Profile>
      <Title>Minhas músicas favoritas</Title>
      <ContainerMusic>
        {favoriteMusics.map((item) => (
          <CardFavoriteSongs music={item} />
        ))}
      </ContainerMusic>
      <DropMenu visible={isVisible} toggle={toggleIsVisible}>
        <DropMenuItem>
          <FaUserCircle />
          <span>Meus dados</span>
        </DropMenuItem>
        <DropMenuItem>
          <HiOutlineLogout />
          <span>Sair</span>
        </DropMenuItem>
      </DropMenu>
    </Container>
  );
};

export default Aside;
