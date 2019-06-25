import React from "react";

import { Container, Actions, Button } from "./styles";

const Image = ({ imageSrc, isFavorita, descricao, dispatch, item }) => (
  <Container>
    <Button onClick={() => dispatch(item)}>
      {isFavorita ? "Remover" : "Salvar"}
    </Button>

    <img src={imageSrc} alt="" />
    <span>{descricao}</span>
  </Container>
);

export default Image;
