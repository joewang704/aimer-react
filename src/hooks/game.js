import { useReducer } from "react";

import { fetchPlayer, fetchSensitivity } from "../utils/localStorage";
import { random } from "../utils";
import { ITEMS } from "../data/items";

const initialState = {
  status: "INITIAL",
  player: fetchPlayer(),
  sensitivity: fetchSensitivity(),
  dungeon: {}
};

export const getXPToLevel = (lvl) => lvl * lvl * 10;
export const getDmg = (lvl) =>
  lvl * lvl + lvl * random(1, lvl) + random(1, lvl);

const reducer = (state, action) => {
  switch (action.type) {
    case "setSensitivity": {
      return {
        ...state,
        sensitivity: action.payload.sensitivity
      };
    }
    case "returnToHomeScreen": {
      return {
        status: "INITIAL",
        player: state.player,
        dungeon: {}
      };
    }
    case "startGame":
      return {
        ...state,
        status: "RUNNING",
        enemies: action.payload.enemies,
        timer: action.payload.timer,
        dungeon: action.payload,
        currentEnemyIdx: 0,
        collectedXP: 0,
        collectedItems: []
      };
    case "nextEnemy": {
      return {
        ...state,
        currentEnemyIdx: state.currentEnemyIdx + 1
      };
    }
    case "damageEnemy": {
      const { enemies, currentEnemyIdx } = state;
      const enemy = enemies[currentEnemyIdx];
      const newEnemies = enemies.slice();
      const newHP = Math.max(enemy.hp - action.payload.damage, 0);
      newEnemies[currentEnemyIdx] = {
        ...enemy,
        hp: newHP
      };

      const newEnemyIdx = newHP ? currentEnemyIdx : currentEnemyIdx + 1;
      let player = state.player;
      // If enemy is killed
      if (!newHP) {
        // Gain XP
        let newXP = state.player.xp + enemy.xp;
        let level = state.player.level;
        const reqXP = getXPToLevel(level);
        // Level if XP maxed
        if (newXP >= reqXP) {
          newXP = newXP - reqXP;
          level++;
          state.dungeon.leveledUp = true;
        }
        state.player = {
          ...state.player,
          xp: newXP,
          level
        };

        state.collectedXP += enemy.xp;

        // Collect possible drops
        enemy.drops.some((item) => {
          if (Math.random() < item.chance) {
            state.collectedItems.push(item);
            state.player.inventory.push(item);
            return true;
          }
        });
      }

      // Complete dungeon
      if (newEnemyIdx >= enemies.length) {
        state.player.dungeonsCompleted[state.dungeon.name] = true;
        return {
          status: "COMPLETED",
          collectedItems: state.collectedItems,
          collectedXP: state.collectedXP,
          dungeon: {
            ...state.dungeon,
            success: true
          },
          player: state.player
        };
      }
      return {
        ...state,
        player,
        enemies: newEnemies,
        currentEnemyIdx: newEnemyIdx
      };
    }
    case "takeDamage": {
      const { enemies, currentEnemyIdx } = state;
      const enemy = enemies[currentEnemyIdx];
      const newHP = Math.max(state.player.hp - enemy.damage, 0);
      if (!newHP) {
        return {
          status: "COMPLETED",
          collectedItems: state.collectedItems,
          collectedXP: state.collectedXP,
          player: state.player,
          dungeon: {
            ...state.dungeon,
            success: false
          }
        };
      }
      return {
        ...state,
        player: {
          ...state.player,
          hp: newHP
        }
      };
    }
    case "equipItem":
      console.log("dispatch hits data store");
      return equipItem(state, action.payload);
    default:
      return state;
  }
};

const equipItem = (state, payload) => {
  const s = { ...state };
  const {
    item: { category, level },
    item
  } = payload;
  //if (s.player.level >= level) {
  // TODO: renable level restrictions on items once error is shown
  if (true) {
    s.player.equipment[category] = item;
    console.log(s);
    return s;
  } else {
    // throw error here
  }
  return s;
};

export const useGameReducer = () => useReducer(reducer, initialState);
