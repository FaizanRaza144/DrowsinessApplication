import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {Camera,CameraType} from 'expo-camera';

import React from 'react';




export default function App() {


  const [startCamera,setStartCamera] = React.useState(false);
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back);
  const [result,setResult] = React.useState(false);

  const openCamera =async()=>{
    const {status} = await Camera.requestPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }

  const __switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }

if(result){
  return(
    <View style = {styles.container}>
    <Text
    style={{
      color:'white',
      fontSize: 60,
      fontWeight: 800,
      textAlign: 'center'
    }}
    >
      Your Are Sleepy...!
    </Text>
    <TouchableOpacity 
      style = {styles.btn}
      onPress={()=>setResult(false)}
      >
        <Text style = {styles.btnText}>
          Go Back
        </Text>
      </TouchableOpacity>
  </View>
  );
}


  
  return (
    <View style={styles.container}>
     
      {startCamera ? (
      <>
            <TouchableOpacity 
      style = {styles.Backbtn}
      onPress={()=>setStartCamera(false)}
      >
        <Text style = {styles.btnText}>
          Go Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
              onPress={__switchCamera}
              style={{
                backgroundColor:'grey',
                height:50,
                width:"100%",
                color:'black',
              }}
            >
                <Text
                    style={{
                      color:'white',
                      fontSize: 35,
                      fontWeight: 800,
                      textAlign: 'center'
                    }}
                    >
                     Switch Camera
                
                </Text>
          </TouchableOpacity>
          <Camera
           type={cameraType}
          style={{flex: 1,width:"100%"}}
          ref={(r) => {
            camera = r
          }}
        ></Camera>
       
      </>
      ) : (
     <View style={styles.container}>
       <Image
      source={require('./assets/logo.png')}
      />
      <Text style={styles.text}>Drowsiness Detection</Text>
       <TouchableOpacity 
      style = {styles.btn}
      onPress={openCamera}
      >
        <Text style = {styles.btnText}>
          LET'S START
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style = {styles.btn}
      onPress={()=>setResult(true)}
      >
        <Text style = {styles.btnText}>
          NEXT
        </Text>
      </TouchableOpacity>
     </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  text:{
    color:'white',
    fontSize: 50,
    fontWeight: 800,
    textAlign: 'center'
  },
  btn:{
    marginTop:100,
    backgroundColor:'green',
    height:50,
    width:250,
    borderRadius:6,
    
  },
  Backbtn:{
    marginTop:50,
    backgroundColor:'green',
    height:50,
    width:"100%",
    color:'black',
  },
  btnText:{
    flex:1,
    fontSize:30,
    fontWeight:'bold',
     textAlign: 'center',
     color:'white',
  }
});
