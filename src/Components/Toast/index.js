import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { toast, ToastContainer } from "react-toastify";

class Toast extends Component {
  handleToast = mensagem => {
    toast.error(mensagem, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  render() {
    const { mensagem } = this.props.toast;

    return (
      <Fragment>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

        {this.handleToast(mensagem)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  toast: state.toast
});

export default connect(
  mapStateToProps,
  null
)(Toast);
