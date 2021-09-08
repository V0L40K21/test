export const types = {
  SET_LEFT_PIZZA: "SET_LEFT_PIZZA",
  SET_RIGHT_PIZZA: "SET_RIGHT_PIZZA",
};

const setLeftPizza = (data) => ({
  type: types.SET_LEFT_PIZZA,
  ...data,
});

const setRightPizza = (data) => ({
  type: types.SET_RIGHT_PIZZA,
  ...data,
});

export { setLeftPizza, setRightPizza };
