import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {Camera,CameraType} from 'expo-camera';

import React from 'react';


const Home=({navigation})=> {  
  return (  
     <View style={styles.container}>
       <Image
      source={require('../assets/logo.png')}
      />
      <Text style={styles.text}>Drowsiness Detection</Text>

       <TouchableOpacity 
      style = {styles.btn}
      onPress={()=>navigation.navigate("Camera")}
      >
        <Text style = {styles.btnText}>
          LET'S START
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.btn}
      onPress={()=>navigation.navigate("Result")}
      >
        <Text style = {styles.btnText}>
          NEXT
        </Text>
      </TouchableOpacity>
    
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

  btnText:{
    flex:1,
    fontSize:30,
    fontWeight:'bold',
     textAlign: 'center',
     color:'white',
  }
});

export default Home;
