import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
// import { SvgXml } from 'react-native-svg';
// import iconCamera from '../images/icon_camera.svg';
import CameraIconComponent from '../components/icons/icon_camera'
import TopHistoryIconComponent from '../components/icons/icon_top_history'
import HeaderContentIconComponent from '../components/icons/icon_header_content'

const fontDataStorage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
})

fontDataStorage.save({
  key: '0',
  data: {
    name: 'kabaya',
    url: 'http://localhost',
  }
})

const Test = () => {
  const [test, setTest] = useState(0)
  useEffect(() => {
    document.title = `${test} aaaa`
  })
}

let a = 'aaa'

fontDataStorage
  .load({ key: '0' })
  .then(res => a = res.url)
  .catch(err => console.warn(err))

class Index extends React.Component {
  render() {
    return (
      <View style={styles.top}>
        <View style={styles.topCamera}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Details')}>
            <View marginBottom={10}>
              <CameraIconComponent />
            </View>
          </TouchableOpacity>
          <Text style={{ "fontSize": 18, "color": "#5B5B5B" }}>手書き文字をスキャン</Text>
        </View>

        {/* ここから下 */}

        <View style={styles.topGroup}>
          <View style={styles.topContents}>
            <View style={{ marginTop: 26, marginBottom: 10 }}>
              <TopHistoryIconComponent />
            </View>
            <Text style={{ fontSize: 16, "color": "#5B5B5B" }}>フォント履歴</Text>
          </View>

          <View style={styles.topContents}>
            <View style={{ marginTop: 26, marginBottom: 10 }}>
              <HeaderContentIconComponent />
            </View>
            <Text style={{ fontSize: 16, "color": "#5B5B5B" }}>設定</Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    "top": {
      "marginTop": 94,
      "marginRight": 43,
      "marginBottom": 151,
      "marginLeft": 43
    },
    "topCamera": {
      "alignItems": "center",
      "fontSize": 18
    },
    "topCamera_div_img": {
      "width": 154,
      "marginBottom": 10
    },
    "topGroup": {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      "marginTop": 26,
      flexDirection: 'row'
    },
    "topContents": {
      "fontSize": 16,
      alignItems: 'center'
    },
    "topContents_div_img": {
      shadowColor: '#ccc',
      shadowOffset: {
        width: 3,
        alignSelf: 'flex-end',
        height: 6,
      },
      shadowRadius: 0,
      shadowOpacity: 1,
      width: "105px",
      height: "105px"
      // "borderRadius": "50%",
      // // "boxShadow": "0 3px 6px 0 r",
      // "width": "105px",
      // "marginBottom": 8
    }
  }
);

export default Index;