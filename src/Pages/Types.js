import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.png";
import Icon from "../Components/Icon";
import Loading from "../Components/Loading";
import Title from "../Components/Title";

import TYPES from "../Mocks/Types";

const useStyles = createUseStyles({
  ul: {
    display: "flex",
    alignItems: "center",
    flexFlow: "row wrap",
    justifyContent: "center",
    listStyleType: "none",
    maxWidth: "1440px",
    padding: 0,
    margin: "0 auto",
    "@media (max-width: 480px)": {
      "& > a ": {
        width: "100%",
      },
    },
  },
  li: {
    margin: "1rem",
    padding: "1rem",
    borderRadius: "10px",
  },
  img: {
    maxWidth: "300px",
  },
});

const Types = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const types = TYPES?.types || []; // Ajoutez une vérification pour TYPES

  if (!types.length) return <Loading middle />;

  return (
    <Fragment>
      <Title text="Select your favorite type...">
        <img src={logo} alt="Logo Pokémon" className={classes.img} />
      </Title>

      <ul className={classes.ul}>
        {types.map(({ bg, img, name }) => (
          <Link to={`${pathname}${name}`} key={name}>
            <li
              className={classes.li}
              style={{ background: "#fafafa" }}
            >
              <Icon
                bg={bg}
                size="big"
                name={name}
                img={img}
                text={name}
                skeleton
                hover
              />
            </li>
          </Link>
        ))}
      </ul>
    </Fragment>
  );
};

export default Types;
