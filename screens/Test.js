import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { StackView } from 'react-navigation-stack'
import ScanIconComponent from '../components/icons/icon_scan'
import GarallyIconComponent from '../components/icons/icon_garally'
import * as FileSystem from 'expo-file-system'
import { Header } from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import { AppLoading } from 'expo'

import { Subscribe } from "unstated";

import CounterContainer from '../container/fontContainer'
import { isLoaded } from 'expo-font';



export default function App(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isLoading, setLoading] = useState(false);
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

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>

    );
  }


  return (
    <Subscribe to={[CounterContainer]}>
      {globalState => (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type} ref={ref => {
            setCameraRef(ref);
          }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'flex-end'
              }}>
              {/* <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity> */}
              {/* ここからfooter */}
              <View style={styles.footer}>
                <View style={styles.footerContents}>
                  <TouchableOpacity onPress={async () => {
                    if (cameraRef) {
                      let photo = await cameraRef.takePictureAsync();
                      console.log('photo', photo);

                      let localUri = photo['uri'];
                      let filename = localUri.split('/').pop();

                      let match = /\.(\w+)$/.exec(filename);
                      let type = match ? `image/${match[1]}` : `image`;

                      let formData = new FormData();

                      setLoading(true)

                      formData.append('photo', { uri: localUri, name: filename, type });

                      // return await fetch('http://localhost:8123/v1/vgg16/classify', {
                      //   method: 'POST',
                      //   body: formData,
                      //   header: {
                      //     'content-type': 'multipart/form-data',
                      //   },
                      // });
                      // 

                      console.log('props', props)
                      axios({
                        method: 'POST',
                        url: 'https://font-search.k-shir0.jp/v1/vgg16/classify',
                        data: formData,
                        config: { headers: { "Content-Type": "multipart/form-data" } }
                      })
                        .then(function (response) {


                          globalState.setState({ data: response.data.prediction })

                          console.log(globalState)

                          setLoading(false)

                          props.navigation.navigate('Result')


                        })






                    }
                  }}>
                    {/* style={ styles[".footerCamera"] } */}

                    <View>
                      <ScanIconComponent />
                    </View>
                  </TouchableOpacity>
                  {/* <View style={styles[".footerGarally"]}>
                <GarallyIconComponent />
              </View> */}
                </View>
              </View>
            </View>
          </Camera>
        </View>
      )}
    </Subscribe>
  );

}

const styles = StyleSheet.create(
  {
    "container": {
      flex: 1,
      justifyContent: "center"
    },
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
      // "display": "grid" ,
      // "gridTemplateRows": "auto 36px 44px 30px",
      // "gridTemplateColumns": "auto 44px 16px 80px 60px auto"
    },
    "footerContents": {
      display: 'flex',
      height: 78,
      // paddingRight: 60,
      "marginTop": 0,
      "marginRight": "auto",
      "marginBottom": 0,
      "marginLeft": "auto"
    },
    "footerGarally": {
      // "width": 44,
      // "height": 44,
      top: 34,
      left: 92,

      "marginTop": "auto",
      "marginRight": 16,
      "marginBottom": 0,
      "marginLeft": 0,
      // "borderTopLeftRadius": "50%",
      // "borderTopRightRadius": "50%",
      // "borderBottomRightRadius": "50%",
      // "borderBottomLeftRadius": "50%"
    },
    ".footerCamera": {}
  }
)