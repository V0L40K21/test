import React, { useEffect, useState } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import configureStore from "./src/redux/store/configure";
import MainStack from "./src/navigation/MainStack";
import SplashScreen from "./src/components/SplashScreen";


const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const { store } = configureStore();
  const [reHydrated, setReHydrated] = useState(false);

  useEffect(() => {
    persistStore(store, {}, () => {
      setReHydrated(true);
    });
  }, []);

  if (!reHydrated) return <SplashScreen />;

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
