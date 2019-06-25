import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ImagensCreators } from "../../Store/imagens/reducer";
import { Creators as FavoritasCreators } from "../../Store/favoritas/reducer";

import Image from "../../Components/Image";

import { Container } from "./styles";

class Inicio extends Component {
  state = {
    page: 0
  };

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
    let nextPage = this.state.page + 1;
    const { requestImagens } = this.props;
    this.setState({ page: nextPage });
    requestImagens(nextPage);
  };

  render() {
    const { addFavoritas, imagens, totalRecords } = this.props;
    const { data = [] } = imagens;

    return (
      <InfiniteScroll
        dataLength={totalRecords}
        next={this.loadPage}
        hasMore={true}
      >
        <Container>
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
        </Container>
      </InfiniteScroll>
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
