import React from "react";
import { Text, View, StyleSheet } from "react-native";


class ResultTopFont extends React.Component {


  render() {
    return (
      <View style={styles.item}>
        <View style={styles.otherBox}>
          <Text style={{ fontSize: 28, fontFamily: this.props.fontFamily }}>F</Text>
        </View>
        <Text style={styles.name}>{this.props.fontName}</Text>
        <Text style={styles.style}>{this.props.fontStyle ? `- ${this.props.fontStyle}` : ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  "item": {
    "paddingLeft": 40,
    "marginBottom": 20,
    "display": "flex",
    "flexDirection": 'row',
    "alignItems": 'center',
  },
  "otherBox": {
    height: 50,
    width: 20,
    justifyContent: "center"
  },
  "name": {
    "paddingTop": 0,
    "paddingRight": 8,
    "paddingBottom": 0,
    "paddingLeft": 24
  },
  "style": {
    "fontSize": 12,
    "paddingTop": 0,
    "paddingRight": 8,
    "paddingBottom": 0,
    "paddingLeft": 4
  },
})

export default ResultTopFont;