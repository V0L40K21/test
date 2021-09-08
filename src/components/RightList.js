import React, { useRef, useEffect } from "react";
import { Text, View, Platform, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

import { setRightPizza } from "../redux/actions/pizzaAction";
import { height, images } from "../constants/appConstants";
import { connect } from "react-redux";

const RightList = ({ data, setRightPizza, right }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.snapToItem(right - 1);
  }, [right]);

  return (
    <Carousel
      ref={ref}
      data={data}
      sliderHeight={Platform.OS === "ios" ? height - 190 : height - 230}
      itemHeight={height / 2.5}
      vertical={true}
      inactiveSlideOpacity={0.5}
      inactiveSlideScale={0.5}
      onSnapToItem={(index) => setRightPizza({ id: index + 1 })}
      renderItem={({ item, index }) => {
        return (
          <View>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.cost}>{item.cost}₽</Text>
            </View>
            <Image
              source={index % 2 === 0 ? images.right[0] : images.right[1]}
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
    marginRight: 10,
  },
  cost: {
    color: "gray",
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({
  right: state.pizzas.rightPizza,
});

export default connect(mapStateToProps, { setRightPizza })(RightList);
