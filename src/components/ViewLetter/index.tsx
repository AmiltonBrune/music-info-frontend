import React from 'react';
import { CgClose } from 'react-icons/cg';

import {
  Container,
  Close,
  ContainerImage,
  ContainerTitle,
  Img,
} from './styles';

interface IViewLetterProps {
  toggle(): void;
  hide: boolean;
}

const ViewLetter: React.FC<IViewLetterProps> = ({ hide, toggle }) => {
  return (
    <>
      {hide && (
        <Container>
          <Close onClick={toggle}>
            <CgClose />
          </Close>
          <ContainerImage>
            <Img src='assets/mocks/iron.png' alt='iron' />
            <ContainerTitle>
              <h3>Fear of the dark</h3>
              <span>Iron Maiden (Fear of the dark)</span>
            </ContainerTitle>
          </ContainerImage>
          <p>
            I am a man who walks alone And when I'm walking a dark road At night
            or strolling through the park When the light begins to change I
            sometimes feel a little strange A little anxious when it's dark Fear
            of the dark Fear of the dark I have a constant fear that something's
            always near Fear of the dark Fear of the dark I have a phobia that
            someone's always there Have you run your fingers down the wall And
            have you felt your neck skin crawl When you're searching for the
            light? Sometimes when you're scared to take a look At the corner of
            the room You've sensed that something's watching you Fear of the
            dark Fear of the dark I have a constant fear that something's always
            near Fear of the dark Fear of the dark
          </p>
        </Container>
      )}
    </>
  );
};

export default ViewLetter;
