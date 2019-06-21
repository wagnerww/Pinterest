import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ImagensCreators } from "../../Store/imagens/reducer";

import Image from "../../Components/Image";

import { Container } from "./styles";

class Inicio extends Component {
  componentDidMount() {
    const { requestImagens } = this.props;
    requestImagens();
  }

  render() {
    const { data = [], isLoading } = this.props.imagens;
    console.log("img", data);

    return (
      <Container>
        {!isLoading && data.length >= 1 ? <Image /> : "...carregando"}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  imagens: state.imagens
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ImagensCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inicio);
