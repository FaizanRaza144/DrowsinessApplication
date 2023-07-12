import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image,TouchableOpacity} from 'react-native';
import { Camera,CameraType } from 'expo-camera';

export default function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);
 


  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
   <View style={{ flex: 1}}>
      <View style={styles.cameraContainer}>
          
            <Camera 
            ref={ref => setCamera(ref)}
            style={{flex:1,width:"100%"}} 
            type={type}
            >
              <TouchableOpacity 
          style = {styles.btn}
          onPress={
            () => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
          }}
          >
            <Image
            style={{
              height:40, width:40
            }}
            source={require('../assets/camera-shift.png')}/>
          </TouchableOpacity>
            </Camera>

      </View>
     
   </View>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
  },
  btn:{
    marginTop:20,
    padding:5,
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor: 'grey'
  }
  
})