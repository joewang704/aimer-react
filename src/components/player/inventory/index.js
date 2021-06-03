import React, { useContext } from "react";
import styled from "@emotion/styled";

import { GameContext } from "../../app";

import Item from "./item";

const Container = styled.div`
  padding: 24px;
`;

const ItemList = styled.div`
  display: flex;
`;

const Inventory = () => {
  const { state, dispatch } = useContext(GameContext);
  console.log(state.player.inventory.map((item) => console.log(item[0])));

  return (
    <Container>
      <h3>Inventory</h3>
      <ItemList>
        {state.player.inventory.map((item, i) => {
          return (
            <Item
              item={item && item[0]}
              key={i}
              onClick={() => dispatch({ type: "equipItem", payload: { item } })}
            />
          );
        })}
      </ItemList>
    </Container>
  );
};

export default Inventory;
