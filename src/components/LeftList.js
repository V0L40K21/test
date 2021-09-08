import React, { useEffect, useRef } from "react";
import { Text, View, Platform, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { connect } from "react-redux";

import { setLeftPizza } from "../redux/actions/pizzaAction";
import { height, images } from "../constants/appConstants";

const LeftList = ({ data, setLeftPizza, left }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.snapToItem(left - 1);
  }, [left]);

  return (
    <Carousel
      ref={ref}
      data={data}
      sliderHeight={Platform.OS === "ios" ? height - 190 : height - 230}
      itemHeight={height / 2.5}
      vertical={true}
      inactiveSlideOpacity={0.5}
      inactiveSlideScale={0.5}
      onSnapToItem={(index) => setLeftPizza({ id: index + 1 })}
      renderItem={({ item, index }) => {
        return (
          <View style={{ alignItems: "flex-end" }}>
            <View style={{ width: "100%" }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.cost}>{item.cost}₽</Text>
            </View>
            <Image
              source={index % 2 === 0 ? images.left[0] : images.left[1]}
              style={{ height: "100%", width: 150 }}
              resizeMode={"contain"}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  name: {
    textAlign: "left",
    marginLeft: 10,
  },
  cost: {
    color: "gray",
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => ({
  left: state.pizzas.leftPizza,
});

export default connect(mapStateToProps, { setLeftPizza })(LeftList);
