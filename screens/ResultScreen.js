
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

const ResultScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style ={styles.text}>
                You are Sleepy...!
            </Text>

            <TouchableOpacity 
                style = {styles.btn}
                onPress={()=>navigation.navigate("Camera")}
                >
        <Text style = {styles.Backbtn}>
          GO BACK
        </Text>
      </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
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
        flex:1,
        fontSize:30,
        fontWeight:'bold',
         textAlign: 'center',
         color:'white',
      },
});
export default ResultScreen;