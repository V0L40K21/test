import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={{
          title: 'Пицца из половинок, 35см',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
