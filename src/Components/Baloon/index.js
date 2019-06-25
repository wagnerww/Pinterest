import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as FavoritasActions } from "../../Store/favoritas/reducer";
import store from "../../Store";

import Image from "../Image";

import { BaloonContainer } from "./styles";

class Baloon extends Component {
  componentDidMount() {
    this.load();
  }

  componentDidUpdate() {
    const load = store.getState().favoritas.lastFavoritas ? false : true;
    if (load) {
      this.load();
    }
  }

  load = () => {
    const { requestLastFavoritas } = this.props;
    requestLastFavoritas(5);
  };

  render() {
    const { removeFavoritas } = this.props;
    const { lastFavoritas = [], isLoading } = this.props.favoritas;
    return (
      <BaloonContainer>
        <div>
          {!isLoading && lastFavoritas.length >= 1
            ? lastFavoritas.map((image, index) => (
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
        </div>
      </BaloonContainer>
    );
  }
}

const mapStateToProps = state => ({
  favoritas: state.favoritas
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritasActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Baloon);
