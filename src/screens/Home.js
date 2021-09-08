import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

import DodoButton from "../components/DodoButton";
import LeftList from "../components/LeftList";
import RandomButton from "../components/RandomButton";
import RightList from "../components/RightList";
import { setLeftPizza, setRightPizza } from "../redux/actions/pizzaAction";

const Home = ({ pizzas, left, right, setLeftPizza, setRightPizza }) => {
  const [total, setTotal] = useState(0);

  const RandPizza = () => {
    const left = Math.floor(Math.random() * 5);
    const right = Math.floor(Math.random() * 5);
    setLeftPizza({id: left});
    setRightPizza({id: right});
  };

  useEffect(() => {
    const leftPizza = pizzas.find((p) => p?.id === left);
    const rightPizza = pizzas.find((p) => p?.id === right);
    setTotal(leftPizza?.cost + rightPizza?.cost);
  }, [left, right]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <LeftList data={pizzas} />
        <RightList data={pizzas} />
      </View>
      <View>
        <Text style={styles.price}>Цена {total}₽</Text>
        <DodoButton title={"Объеденить половинки"} />
        <RandomButton cb={RandPizza} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  price: {
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  pizzas: state.pizzas.allPizzas,
  left: state.pizzas.leftPizza,
  right: state.pizzas.rightPizza,
});

export default connect(mapStateToProps, { setLeftPizza, setRightPizza })(Home);
