import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

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

class Header extends Component {
  state = {
    search: ""
  };

  componentDidMount() {
    window.onscroll = function() {
      menuScrool();
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    this.setState({ search: "" });
    this.props.history.push(`/search/${search}`);
  };

  render() {
    const { path } = this.props.match;

    return (
      <HeaderMenu id="myHeader">
        <Container>
          <ContainerItem>
            <IconLogo to="/">
              <i className="fab fa-pinterest logo" />
            </IconLogo>
          </ContainerItem>
          <ContainerItemCol2>
            <ContainerSearch>
              <i class="fas fa-search" />
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  name="search"
                  onChange={this.handleChange}
                  value={this.state.search}
                />
              </form>
            </ContainerSearch>
          </ContainerItemCol2>
          <ContainerItem>
            <LinkHeader to="/" path={path}>
              Página inicial
            </LinkHeader>
          </ContainerItem>
          <ContainerItem>
            <LinkHeader to="/favoritas" path={path}>
              Favoritas
            </LinkHeader>
          </ContainerItem>
          <ContainerItem>
            <LinkHeader to="">
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
            <IconLink to="">
              <i class="fas fa-comment-dots" />
            </IconLink>
          </ContainerItem>
          <ContainerItem>
            <IconLink to="">
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
    );
  }
}

export default withRouter(Header);
