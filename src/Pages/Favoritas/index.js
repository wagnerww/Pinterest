import React, { Component, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as FavoritasCreators } from "../../Store/favoritas/reducer";

import Image from "../../Components/Image";

//import { Container } from "./styles";
import {
  Container,
  ConcluidoDetail,
  ContainerConcluido,
  SeparadorConcluido
} from "../Inicio/styles";

class Inicio extends Component {
  state = {
    page: 0,
    asMore: true
  };

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
    let nextPage = this.state.page + 1;
    const { requestFavoritas, favoritas } = this.props;
    const { totalRecords, data } = favoritas;
    let hasMore = true;
    if (totalRecords == data.length && totalRecords != 0) {
      hasMore = false;
    }

    this.setState({ page: nextPage, hasMore });
    requestFavoritas();
  };

  render() {
    const { removeFavoritas } = this.props;
    const { data = [], isLoading } = this.props.favoritas;
    const { hasMore } = this.state;

    return (
      <Fragment>
        <Container>
          <InfiniteScroll
            dataLength={data.length}
            next={this.loadPage}
            hasMore={hasMore}
          >
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
          </InfiniteScroll>
        </Container>

        {!hasMore && (
          <ContainerConcluido>
            <strong>Isso é tudo</strong>
            <ConcluidoDetail>
              <SeparadorConcluido />
              <i className="fas fa-check-circle" />
              <SeparadorConcluido />
            </ConcluidoDetail>
          </ContainerConcluido>
        )}
      </Fragment>
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
