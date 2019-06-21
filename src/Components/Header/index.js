import React from "react";
import {
  Container,
  ContainerItem,
  ContainerItemCol2,
  IconLink,
  ContainerSearch,
  LinkHeader,
  Profile,
  IconLogo
} from "./styles";

const Header = () => (
  <header>
    <Container>
      <ContainerItem>
        <IconLogo>
          <i className="fab fa-pinterest logo" />
        </IconLogo>
      </ContainerItem>
      <ContainerItemCol2>
        <ContainerSearch>
          <i class="fas fa-search" />
          <input type="text" placeholder="Pesquisar" />
        </ContainerSearch>
      </ContainerItemCol2>
      <ContainerItem>
        <LinkHeader>Página inicial</LinkHeader>
      </ContainerItem>
      <ContainerItem>
        <LinkHeader>Favoritas</LinkHeader>
      </ContainerItem>
      <ContainerItem>
        <LinkHeader>
          <Profile>
            <img
              src="https://i.pinimg.com/75x75_RS/e6/40/1a/e6401aa48c2b83d61dbb0358d0c84628.jpg"
              alt=""
            />
            <span>Wagner Ricardo</span>
          </Profile>
        </LinkHeader>
      </ContainerItem>
      <ContainerItem>
        <IconLink>
          <i class="fas fa-comment-dots" />
        </IconLink>
      </ContainerItem>
      <ContainerItem>
        <IconLink>
          <i class="fas fa-bell" />
        </IconLink>
      </ContainerItem>
      <ContainerItem>
        <IconLink>
          <i class="fab fa-gratipay" />
        </IconLink>
      </ContainerItem>
    </Container>
  </header>
);

export default Header;
