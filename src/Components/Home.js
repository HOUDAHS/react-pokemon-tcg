import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";

import logo from "../img/logo.png";

import Icon from "../Components/Icon";
import Loading from "../Components/Loading";
import Title from "../Components/Title";

import TYPES from "../Mocks/Types";

const Types = () => {
  const { types } = TYPES;
  return <div>I'm Types page</div>;
};

export default Home;