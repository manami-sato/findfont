import React from 'react';
import { Camera } from 'expo-camera'
import { Icon } from 'expo'

import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';

export default class CameraComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    }

    this.takePicture = this.takePicture.bind(this);
  }

  // 初期起動時、カメラの使用の権限を取得する。
  async componentDicMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  }

  async takePicture() {
    const pictureData = await this.camera.takePictureAsync();
    Toast.show({
      text: 'Success',
      buttonText: 'Okay',
      duration: 2000,
    });
    console.log(pictureData.uri); // キャッシュ保存先パス
  }

  render() {
    // if (this.state.hasCameraPermission === null) {
    //   return <View />;
    // }
    if (this.state.hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={this.state.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            {/* <TouchableOpacity
              
              
            > */}
            <Button
              style={{
                flex: 1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                this.takePicture();
              }}
            />
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync();
                console.log('photo', photo);
              }
            }}>
              <View style={{
                borderWidth: 2,
                borderRadius: "50%",
                borderColor: 'white',
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              >
                <View style={{
                  borderWidth: 2,
                  borderRadius: "50%",
                  borderColor: 'white',
                  height: 40,
                  width: 40,
                  backgroundColor: 'white'
                }} >
                </View>
              </View>
            </TouchableOpacity>

            {/* <Icon.MaterialIcons
                name="camera"
                size={70}
                style={{ marginBottom: 20 }}
                color={Colors.tabIconDefault}
              /> */}
            {/* </TouchableOpacity> */}
          </View>
        </Camera>
      </View>
    )
  }
}