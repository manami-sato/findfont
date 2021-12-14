import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Toast } from 'native-base';


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            {/* <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    // ".hBack": {
    //   "position": "absolute",
    //   "top": "22px",
    //   "right": "30px",
    //   "width": "17px"
    // },
    // ".camera": {
    //   "height": "475px"
    // },
    "footer": {
      "marginBottom": 0,
      "paddingTop": 20,
      "paddingRight": 0,
      "paddingBottom": 30,
      "paddingLeft": 0,
      "height": 128,
      "backgroundColor": "#639CBF",
      "color": "#fff",
      "fontSize": 18,
      // "display": "grid",
      // "gridTemplateRows": "auto 36px 44px 30px",
      // "gridTemplateColumns": "auto 44px 16px 80px 60px auto"
    },
    // ".footerGrid1": {
    //   "gridRow": "2/4",
    //   "gridColumn": "4"
    // },
    // ".footerGrid2": {
    //   "gridRow": "3",
    //   "gridColumn": "2"
    // },
    // ".footerGrid1 img": {
    //   "width": "78px",
    //   "borderRadius": "50%",
    //   "boxShadow": "0 3px 6px 0 rgba(0, 0, 0, 0.16)"
    // },
    // ".footerGrid2 img": {
    //   "width": "44px",
    //   "borderRadius": "50%",
    //   "boxShadow": "0 3px 6px 0 rgba(0, 0, 0, 0.16)"
    // }
  }
)