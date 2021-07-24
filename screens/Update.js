import React, { useState } from 'react';
import {Text,View,StyleSheet, Alert} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import {TextInput,Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
const Update = ({navigation,route}) => {

    const getDetails =(type) =>{
      if(route.params){
        console.log(route.params)
        switch(type){
          case "name":
            return route.params.name
          case "email":
            return route.params.email
          case "phone":
            return route.params.phone
          case "job":
            return route.params.job    
        }
      }
      return""
    }
    const [name,setName]=useState(getDetails("name"))
    const [email,setEmail] = useState(getDetails("email"))
    const [phone,setPhone] = useState(getDetails("phone"))
    const [job,setJob]=useState("job")
        const updateDetails =() =>{
          fetch("http://172.20.10.4:5000/details/"+route.params._id,{
            method:"patch",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              id:route.params._id,
              name,
              email,
              phone,
              job
            })

          })
          .then(res=>res.json())
          .then(data=>{
            Alert.alert('user updated')
            navigation.navigate("Home")
          })
          .catch(err=>{
            Alert.alert('something went wrong')
          })
        }
  return (
    <View style={styles.container}>
      
      <View>
      <Text style={styles.heading}>Edit details</Text>
        <View style={styles.inputcontainer}>
           <TextInput
           label="Name"
           mode="outlined"
           value={name}
           theme={themes}
           onChangeText={text => setName(text)}
           />
          
        </View>
        <View style={styles.inputcontainer}>
           <TextInput
           label="Email"
           mode="outlined"
           value={email}
           theme={themes}
           onChangeText={text=>setEmail(text)}
           />
           
        </View>
        <View style={styles.inputcontainer}>
           <TextInput
           label="Mobile number"
           mode="outlined"
           theme={themes}
           value={phone}
           onChangeText={text => setPhone(text)}
           />
           
        </View>
        <View style={styles.inputcontainer}>
           <TextInput
           label="Job"
           mode="outlined"
           theme={themes}
           value={job}
           onChangeText={text =>setJob(text)}
           />
           
        </View>
        <Button  style={styles.button}mode="contained" onPress={() => updateDetails()}>
          <Text>Update</Text>
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
    left:150
  },
  
})
export default Update;

// import React, { useState } from 'react';

// import {Text,View,StyleSheet, Alert} from 'react-native';
// import { Switch } from 'react-native-gesture-handler';
// import {TextInput,Button} from 'react-native-paper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';
// import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
// const Update = ({navigation,route}) => {

//   const getDetails = (type) =>{
//     if(route.params){
//       switch (type) {
//         case "name":
//           return route.params.name
//         case "email":
//         return route.params.email
//         case "phone":
//            return route.params.phone
//         case "job":
//           return route.params.job     

//       }
//     }
//     return""
//   }

//    const [name,setName]=useState(getDetails("name"))
//    const [email,setEmail]=useState(getDetails("email"))
//    const [phone,setPhone]=useState(getDetails("phone"))
//    const [job,setJob]=useState(getDetails("job"))
      
// const updateDetails =() =>{
//   fetch('http://172.20.10.4:5000/details/' +route.params_id,{
//     method:'patch',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//       id:route.params._id,
//       name,
//       email,
//       phone,
//       job
//     })

//   }).then(res=>res.json())
//     .then(data=>{
//     Alert.alert('Details updated')
//     navigation.navigate('Home')
//   }).catch(err=>{
//     Alert.alert('Something went wrong')
//   })
// }

//   return (
//     <View style={styles.container}>
      
//       <View>
//       <Text style={styles.heading}>Edit details</Text>
//         <View style={styles.inputcontainer}>
//            <TextInput
//            label="Name"
//            mode="outlined"
//            value={name}
//            theme={themes}
//           onChangeText={name=> setName(name)}
//            />
          
//         </View>
//         <View style={styles.inputcontainer}>
//            <TextInput
//            label="Email"
//            mode="outlined"
//            value={email}
//            theme={themes}
//           onChangeText={email=>setEmail(email)}
//            />
           
//         </View>
//         <View style={styles.inputcontainer}>
//            <TextInput
//            label="Mobile number"
//            mode="outlined"
//            theme={themes}
//            value={phone}
//           onChangeText={phone=> setPhone(phone)}
//            />
           
//         </View>
//         <View style={styles.inputcontainer}>
//            <TextInput
//            label="Job"
//            mode="outlined"
//            theme={themes}
//            value={job}
//            onChangeText={job =>setJob(job)}
//            />
           
//         </View>
//         <Button  style={styles.button}mode="contained" onPress={() => updateDetails()}>
//           <Text>Update</Text>
//         </Button>
//       </View>
//     </View>
//   )
// }
// const themes ={
//   colors:{
//     primary:'black'
//   }
// }
// const styles=  StyleSheet.create({
//   conatiner:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   inputcontainer:{
//     bottom:250,
//     width:390,
//     height:44,
//     margin:15,
  
//     flexDirection:'column-reverse'
//   },
//   button:{
//     top:260,
//     width:160,
//     left:120,
//     backgroundColor:"black"
//   },
//   heading:{
//     fontSize:20,
//     top:230,
//     left:150
//   },
  
// })
// export default Update;