import React, { useState } from 'react';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';

import imageDash from '../../assets/imageDash.svg';
import disco from '../../assets/disco.svg';
import musicDisc from '../../assets/musicDisc.svg';

import Button from 'components/Button';
import Bagde from 'components/Bagde';
import ViewLetter from 'components/ViewLetter';

import {
  Container,
  ContainerContent,
  ContainerImage,
  Img,
  Left,
  Rigth,
  Capa,
  Disc,
  ButtonIcon,
  ContainerButtons,
  ContainerTitle,
} from './styles';

interface ICardLastMusicPros {
  music: {
    name: string;
    artist: string;
    gender: string;
    like: boolean;
    album?: {
      name: string;
      photo?: string;
    };
  };
}

const CardLastMusic: React.FC<ICardLastMusicPros> = ({ music }) => {
  const [likeMusic, setLikeMusic] = useState(music.like);
  const [isHide, setIsHide] = useState(false);

  const toggleIsHide = () => {
    setIsHide(!isHide);
  };

  const handleLikeMusic = () => {
    setLikeMusic(!likeMusic);
  };

  return (
    <Container>
      <ContainerContent>
        <Left>
          <Bagde>{`#${music.gender}`}</Bagde>
          <ContainerTitle>
            <h2>{music.name}</h2>
            <span>{`${music.artist} (${music.album?.name})`}</span>
          </ContainerTitle>
          <ContainerButtons>
            <Button onClick={toggleIsHide}>ver letra</Button>
            <ButtonIcon onClick={handleLikeMusic}>
              {likeMusic ? <TiHeartFullOutline /> : <TiHeartOutline />}
            </ButtonIcon>
          </ContainerButtons>
        </Left>
        <Rigth>
          <Capa
            src={music.album?.photo ? music.album?.photo : musicDisc}
            alt='music'
          />
          <Disc src={disco} alt='disco' />
        </Rigth>
      </ContainerContent>
      <ContainerImage>
        <Img src={imageDash} alt='Dash' />
      </ContainerImage>
      <ViewLetter hide={isHide} toggle={toggleIsHide} />
    </Container>
  );
};

export default CardLastMusic;
