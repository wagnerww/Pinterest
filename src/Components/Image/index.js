import React from "react";

import { Container, Actions, Button } from "./styles";

const Image = ({ imageSrc, isFavorita, descricao, dispatch, item }) => (
  <Container>
    <Actions>
      <Button onClick={() => dispatch(item)}>
        {isFavorita ? "Remover" : "Salvar"}
      </Button>
    </Actions>
    <img src={imageSrc} alt="" />
    <span>{descricao}</span>
  </Container>
);

export default Image;
