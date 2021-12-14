import React from "react";
import { Text, View, StyleSheet } from "react-native";


class ResultTopFont extends React.Component {


  render() {
    return (
      <View style={styles.most}>
        <View style={styles.mostBox}>
          <Text style={{ fontSize: 46, fontWeight: 'bold', fontFamily: this.props.fontFamily }}>F</Text>
          {/* , fontFamily: {this.props.fontFamily} */}
        </View>
        <Text style={styles.mostName}>{this.props.fontName}</Text>
        <Text style={styles.mostStyle}>{this.props.fontStyle ? `- ${this.props.fontStyle}` : ''}</Text>
      </View>
    );
  }
}

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Subscribe to={[InvoiceContainer]}>
//       {globalState => <HomeScreenContent globalState={globalState} navigation={navigation} />}
//     </Subscribe>
//   );
// }

const styles = StyleSheet.create({
  "most": {
    "marginLeft": "auto",
    "marginRight": "auto",
    // "display": "flex",
    // "alignItems": "center",
    // "justifyContent": "center",
    "flexDirection": 'row',
    // justifyContent: 'space-between'
  },
  "mostName": {
    "fontSize": 26,
    "marginTop": 0,
    "marginRight": 10,
    "marginBottom": 0,
    "marginLeft": 12,
    "color": "#5B5B5B"
  },
  "mostStyle": {
    "fontSize": 20,
    marginTop: 4,
    "color": "#5B5B5B"
  },
  "mostBox": {
    height: 50,
    width: 35,
    marginTop: -20,
    justifyContent: 'center',
  }
})

export default ResultTopFont;