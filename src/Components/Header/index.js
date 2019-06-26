import React, { Component, Fragment } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ImagensCreators } from "../../Store/imagens/reducer";
import { Creators as FavoritasCreators } from "../../Store/favoritas/reducer";

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
    const { path } = this.props.match;
    if (path === "/") {
      const { searchImagens } = this.props;
      this.setState({ search: "" });
      searchImagens(this.state.search);
    } else {
    }
  };

  render() {
    const { path } = this.props.match;

    return (
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
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  name="search"
                  onChange={this.handleChange}
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
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ImagensCreators, ...FavoritasCreators }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Header);
