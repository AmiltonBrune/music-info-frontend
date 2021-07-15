import React from 'react';
import { CgClose } from 'react-icons/cg';

import Button from 'components/Button';
import Input from 'components/Input';

import { Container, Close, Content } from './styles';

interface IViewLetterProps {
  toggle(): void;
  hide: boolean;
}

const Menu: React.FC<IViewLetterProps> = ({ hide, toggle }) => {
  return (
    <>
      {hide && (
        <Container>
          <Close onClick={toggle}>
            <CgClose />
          </Close>
          <Content>
            <div>
              <label>Nome</label>
              <Input type='text' />
            </div>
            <div>
              <label>Email</label>
              <Input type='text' />
            </div>
            <div>
              <label>Senha</label>
              <Input type='text' />
            </div>
            <div>
              <label>Confirmar Senha</label>
              <Input type='text' />
            </div>
            <Button>salvar</Button>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Menu;
