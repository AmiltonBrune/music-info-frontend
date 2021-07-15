import React from 'react';

import { Img } from './styles';

interface IImageRecentluAddedProps {
  music: {
    photo: string;
  };
}

const ImageRecentluAdded: React.FC<IImageRecentluAddedProps> = ({ music }) => (
  <Img src={music.photo} alt='disco' />
);

export default ImageRecentluAdded;
