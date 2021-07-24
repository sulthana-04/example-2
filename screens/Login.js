import React, { useState } from 'react';
import {Text,View,StyleSheet,Image, Alert} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const SignIn=() =>{
    fetch("http://172.20.10.4:5000/user/login",{
      method:'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
      
        email,
        password
      })
    }).then(async (res) =>{
      if(res.status === 200) {
        const  cookie = res.headers.get('auth-token')
        await AsyncStorage.setItem('token',cookie)
        Alert.alert('user signed in successfully')
        navigation.navigate('Create') 
      }else if (res.status=== 400) {
        Alert.alert('Enter valid email/password')
      }else if (res.status === 401) {
        Alert.alert('User not found')
      }else if (res.status === 402) {
        Alert.alert ('Invalid Password')
      }
    })
  }
   
  
   
 
  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.heading}>Welcome</Text>
        <View style={styles.inputcontainer}>
          <TextInput
          label="Email"
          mode='outlined'
          keyboardType='email-address'
          theme={themes}
          onChangeText={email => setEmail(email)}
         
          />
          <MaterialCommunityIcons  style={styles.icon}size={24}  name="email"/>  
          </View>
          <View style={styles.inputcontainer}>
          <TextInput
          label="Password"
          mode='outlined'
         theme={themes}
         onChangeText={password =>setPassword(password)}
          />
          <Ionicons style={styles.icon} size={24}name="key"/>
        </View>
        <Button  style={styles.button}mode='contained'  onPress={() => SignIn()}>
          <Text>Login</Text>
        </Button>
        <Text style={styles.subheading}>New User?</Text>
        <Button style={styles.button1} mode='text'onPress={()=>{navigation.navigate('Signup')}} >
          <Text style={styles.text}>Register</Text>
        </Button>
      </View>
    </View>
  )
}
const themes ={
  colors:{
    primary:'black'
  }
}
const styles = StyleSheet.create ({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      
    },
    inputcontainer:{
      width:390,
      height:44,
      margin:15,
    
      flexDirection:'column-reverse'
    },
    button:{
      width:200,
      left:100,
      right:10,
      backgroundColor:'black'
    },
    heading:{
      fontSize:30,
      fontWeight:'bold',
      bottom:120,
     left:130
    },
    subheading:{
      left:230,
      fontSize:16,
      top:30,
    },
    button1:{
      left:150,
      backgroundColor:'transparent'
    },
    icon:{
      bottom:45,
      left:350
    },
    text:{
      color:"black"
    }
})




export default Login;