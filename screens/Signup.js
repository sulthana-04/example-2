import React, { useState } from 'react';
import {Text,View,StyleSheet, Alert} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';
const Signup = ({navigation}) => {
    const [name,setName] = useState('')
    const [email,setEmail]  = useState('')
    const [password,setPassword] = useState('')
    const Register =() =>{
      fetch("http://172.20.10.4:5000/user/register",{
        method:'Post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      }).then( async (response) => {
        if (response.status === 404) {
          Alert.alert('Registered Succesfully')
          navigation.navigate('Login')
        }else if (response.status ===400) {
          Alert.alert('Enter Valid Email/Password')
        }else if (response.status === 401) {
          Alert.alert('Email already exist')
        }
      })
    }

   

      

  return (
    <View style={styles.container}>
      
      <View>
      <Text style={styles.heading}>Create a new account</Text>
        <View style={styles.inputcontainer}>
           <TextInput
           label="Name"
           mode="outlined"
           theme={themes}
           onChangeText={name => setName(name)}
           />
           <Ionicons  style={styles.icon} size={24} name="person-circle-outline"/>
        </View>
        <View style={styles.inputcontainer}>
           <TextInput
           label="Email"
           mode="outlined"
           theme={themes}
          onChangeText={email => setEmail(email)}
           />
           <MaterialCommunityIcons style={styles.icon} size={24} name="email"/>
        </View>
        <View style={styles.inputcontainer}>
           <TextInput
           label="Password"
           mode="outlined"
           theme={themes}
           onChangeText={password => setPassword(password)}
           />
           <Ionicons style={styles.icon} size={24}name="key"/>
        </View>
        <Button  style={styles.button}mode="contained" onPress={() => Register()}>
          <Text>Sign up</Text>
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
const styles=  StyleSheet.create({
  conatiner:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  inputcontainer:{
    bottom:250,
    width:390,
    height:44,
    margin:15,
  
    flexDirection:'column-reverse'
  },
  button:{
    top:260,
    width:160,
    left:120,
    backgroundColor:"black"
  },
  heading:{
    fontSize:20,
    top:230,
    left:14
  },
  icon:{
    bottom:45,
    left:350
  }
})
export default Signup;