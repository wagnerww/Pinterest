import React from "react";
import { LinkHeader, IconLink } from "./styles";

const Logo = () => (
  <IconLink to="/favoritas">
    <i className="fab fa-pinterest logo" />
  </IconLink>
);

const Header = () => (
  <header>
    <Logo />
    <ul />
  </header>
);

export default Header;
