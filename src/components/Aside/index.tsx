import React from 'react';

import CardFavoriteSongs from 'components/CardFavoriteSongs';
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
  return (
    <Container>
      <Profile>
        <UserTitle>Amilton Brune</UserTitle>
        <Photo src={userPhoto} alt='User' />
      </Profile>
      <Title>Minhas músicas favoritas</Title>
      <ContainerMusic>
        {favoriteMusics.map((item) => (
          <CardFavoriteSongs music={item} />
        ))}
      </ContainerMusic>
    </Container>
  );
};

export default Aside;
