import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as FavoritasCreators } from "../../Store/favoritas/reducer";

import Image from "../../Components/Image";

import { Container } from "./styles";

class Inicio extends Component {
  componentDidMount() {
    const { requestFavoritas } = this.props;
    requestFavoritas();
  }

  render() {
    const { removeFavoritas } = this.props;
    const { data = [], isLoading } = this.props.favoritas;

    return (
      <Container>
        {!isLoading && data.length >= 1
          ? data.map((image, index) => (
              <Image
                key={index}
                imageSrc={image.url}
                descricao={image.descricao}
                isFavorita={true}
                dispatch={removeFavoritas}
                item={image}
              />
            ))
          : "...carregando"}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  favoritas: state.favoritas
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritasCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inicio);
