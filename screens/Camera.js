import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {Camera} from 'expo-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';

export default function Camera({navigation}) {


  const [startCamera,setStartCamera] = React.useState(false)

  const openCamera =async()=>{
    const {status} = await Camera.requestPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)

    } else {
      Alert.alert('Access denied')
    }
  }

  
  return (
    <View style={styles.container}>
       <TouchableOpacity 
      style = {styles.btn}
      onPress={() => navigation.navigate('Details')}
      >
        <Text style = {styles.btnText}>
          Go Back
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
        <Camera
          style={{width:"100%"}}
          ref={(r) => {
            camera = r
          }}
        ></Camera>
     
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
 
  btn:{
    marginTop:100,
    backgroundColor:'green',
    height:50,
    width:"100%",
    borderRadius:6,
  },
  btnText:{
    flex:1,
    fontSize:30,
    fontWeight:'bold',
     textAlign: 'center',
     color:'white',
  }
});
