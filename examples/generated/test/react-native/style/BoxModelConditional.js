import React from "react"
import { View, StyleSheet } from "react-native"

import colors from "../colors"
import textStyles from "../textStyles"

export default class BoxModelConditional extends React.Component {
  render() {

    let Inner$height
    let Inner$marginBottom
    let Inner$marginLeft
    let Inner$marginRight
    let Inner$marginTop
    let Inner$width

    Inner$marginTop = this.props.margin
    Inner$marginRight = this.props.margin
    Inner$marginBottom = this.props.margin
    Inner$marginLeft = this.props.margin
    Inner$height = this.props.size
    Inner$width = this.props.size
    return (
      <View style={[ styles.outer, {} ]}>
        <View
          style={[
            styles.inner,
            {
              marginTop: Inner$marginTop,
              marginRight: Inner$marginRight,
              marginBottom: Inner$marginBottom,
              marginLeft: Inner$marginLeft,
              width: Inner$width,
              height: Inner$height
            }
          ]}

        />
      </View>
    );
  }
};

let styles = StyleSheet.create({
  outer: {
    alignSelf: "stretch",
    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 4,
    paddingLeft: 4
  },
  inner: { backgroundColor: "#D8D8D8", width: 60, height: 60 }
})