import React, { useContext } from "react";
import styled from "@emotion/styled";

import { GameContext } from "../../app";

const Container = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;

const Item = ({ item }) => {
  const { dispatch } = useContext(GameContext);
  console.log("item has been rendered");

  if (!item) return null;

  return (
    <Container
      onClick={() => dispatch({ type: "equipItem", payload: { item } })}
    >
      <img src={item.img} />
    </Container>
  );
};

export default Item;
