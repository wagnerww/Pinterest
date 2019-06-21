import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ImagensCreators } from "../../Store/imagens/reducer";
import { Creators as FavoritasCreators } from "../../Store/favoritas/reducer";

import Image from "../../Components/Image";

import { Container } from "./styles";

class Inicio extends Component {
  componentDidMount() {
    const { requestImagens } = this.props;
    requestImagens();
  }

  render() {
    const { addFavoritas } = this.props;
    const { data = [], isLoading } = this.props.imagens;

    return (
      <Container>
        {!isLoading && data.length >= 1
          ? data.map((image, index) => (
              <Image
                key={index}
                imageSrc={image.url}
                descricao={image.descricao}
                isFavorita={false}
                dispatch={addFavoritas}
                item={image}
              />
            ))
          : "...carregando"}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  imagens: state.imagens
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ImagensCreators, ...FavoritasCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inicio);
