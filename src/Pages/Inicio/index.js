import React, { Component, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ImagensCreators } from "../../Store/imagens/reducer";
import { Creators as FavoritasCreators } from "../../Store/favoritas/reducer";

import Image from "../../Components/Image";

import {
  Container,
  ConcluidoDetail,
  ContainerConcluido,
  SeparadorConcluido
} from "./styles";

class Inicio extends Component {
  state = {
    page: 0,
    asMore: true
  };

  componentDidMount() {
    const { search } = this.props.match.params;
    this.loadPage(search, 1);
  }

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.props.match.params;
    if (search !== prevProps.match.params.search) {
      this.loadPage(search, 1);
    }
  }

  loadPage = (search, page) => {
    const { requestImagens, imagens } = this.props;
    const { totalRecords, data } = imagens;

    let hasMore = true;
    if (totalRecords == data.length && totalRecords != 0) {
      hasMore = false;
    }

    let nextPage = page ? page : this.state.page + 1;
    this.setState({ page: nextPage, hasMore });
    requestImagens(nextPage, search);
  };

  render() {
    const { addFavoritas, imagens } = this.props;
    const { data } = imagens;
    const { hasMore } = this.state;

    return (
      <Fragment>
        <Container>
          <InfiniteScroll
            dataLength={data.length}
            next={this.loadPage}
            hasMore={hasMore}
          >
            {data.map((image, index) => (
              <Image
                key={index}
                imageSrc={image.url}
                descricao={image.descricao}
                isFavorita={false}
                dispatch={addFavoritas}
                item={image}
              />
            ))}
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
  imagens: state.imagens
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ImagensCreators, ...FavoritasCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inicio);
