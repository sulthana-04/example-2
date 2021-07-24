import React from 'react';
import {Text,View,StyleSheet, Alert} from 'react-native';
import {Card, Button} from 'react-native-paper';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Details = (props,{navigation,route}) =>{
     const {_id,name,email,phone,job} =props.route.params.item

     const deleteUser = () =>{
         fetch('http://172.20.10.4:5000/details/' +_id,{
             method:'delete',
             headers:{
             'Content-Type': 'application/json'
             },
             body:JSON.stringify({

             })
         })
         .then(res=>res.json())
         .then(deleteUser =>{
             Alert.alert('User deleted')
             props.navigation.navigate("Home")
         })
         .catch(err=>{
             Alert.alert('Something went wrong')
         })
     }
      return (
          <View>
              <Card style={styles.card}>
                  <Text>{name}</Text>
              </Card>
              <Card style={styles.card}>
                  <Text>{email}</Text>
              </Card>
              <Card style={styles.card}>
                  <Text>{phone}</Text>
              </Card>
              <Card style={styles.card}>
                  <Text>{job}</Text>
              </Card>
              <Button mode="contained" style={styles.button} onPress={()=>{props.navigation.navigate("Update", {_id,name,email,phone,job}) }}>
                  <Text>Edit</Text>
                  <MaterialCommunityIcons size={15} name="delete-outline"/>
              </Button>
              <Button mode="contained" style={styles.button1} onPress={()=> deleteUser()}>
                  <Text>Delete </Text>
                  <FontAwesome5 size={15} name="edit"/>
              </Button>
          </View>
      )
  }
  const styles = StyleSheet.create({
      card:{
          padding:15,
          margin:7,
          top:200
      },
      button:{
          backgroundColor:'black',
          width:120,
          top:240,
          left:10
      },
      button1:{
          backgroundColor:'black',
          width:120,
          top:200,
          left:250
      }
  })
  export default Details;