import { types } from "../actions/pizzaAction";

const initialState = {
  leftPizza: 1,
  rightPizza: 1,
  allPizzas: [
    {
      id: 1,
      name: "Сырная",
      cost: 1650,
    },
    {
      id: 2,
      name: "Гавайская",
      cost: 2050,
    },
    {
      id: 3,
      name: "Пепперони",
      cost: 2050,
    },
    {
      id: 4,
      name: "Додо",
      cost: 2200,
    },
    {
      id: 5,
      name: "Мясная",
      cost: 2200,
    },
    {
      id: 6,
      name: "Чизбургер",
      cost: 2050,
    },
  ],
};

export default function pizzas(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_LEFT_PIZZA:
      return {
        ...state,
        leftPizza: action.id,
      };
    case types.SET_RIGHT_PIZZA:
      return {
        ...state,
        rightPizza: action.id,
      };
    default:
      return state;
  }
}
