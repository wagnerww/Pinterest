import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  ContainerItem,
  ContainerItemCol2,
  IconLink,
  ContainerSearch,
  LinkHeader,
  Profile,
  IconLogo,
  HeaderMenu
} from "./styles";

import Baloon from "../Baloon";

function menuScrool() {
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.setAttribute("style", "position: fixed;");
  } else {
    header.setAttribute("style", "");
  }
}

const Header = () => (
  <Fragment>
    <HeaderMenu id="myHeader">
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
          <LinkHeader to="/">Página inicial</LinkHeader>
        </ContainerItem>
        <ContainerItem>
          <LinkHeader to="/favoritas">Favoritas</LinkHeader>
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
            <Baloon />
          </IconLink>
        </ContainerItem>
      </Container>
    </HeaderMenu>
    {
      (window.onscroll = function() {
        menuScrool();
      })
    }
  </Fragment>
);

export default Header;
