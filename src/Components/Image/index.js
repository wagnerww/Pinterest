import React from "react";

import { Container, Actions, Button } from "./styles";

const Image = () => (
  <Container>
    <Actions>
      <Button>Salvar</Button>
    </Actions>
    <img
      src="https://i.pinimg.com/236x/0c/e5/0c/0ce50c00a415c85a6af7233c0504d219.jpg"
      alt=""
    />
    <span>
      Alguma descricao que eu quero que apareca neste mesmo luga estou
      escrevendo
    </span>
  </Container>
);

export default Image;
