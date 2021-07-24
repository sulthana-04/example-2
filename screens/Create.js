import React ,{useState} from 'react';
import { Text,View , StyleSheet,Alert,Modal} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Create = ({navigation}) =>{
   const [name,setName]= useState('')
   const [email,setEmail]=useState('')
   const [phone,setPhone]= useState('')  
   const [job,setJob] =useState('')
   const submitData = () =>{
       fetch("http://172.20.10.4:5000/details",{
           method:'post',
           headers:{
              'Content-Type':'application/json' 
           },
           body:JSON.stringify({
               name,
               email,
               phone,
               job
           })
       })
       .then(res=>res.json())
       .then(data=>{
           Alert.alert('details saved successfully')
           navigation.navigate('Home')
       })
       .catch(err=>{
           Alert.alert('Something went wrong')
       })
   }
   
    return(
        <View>
            <View style={styles.conatiner}>
                <View style={styles.inputconatiner}>
                    <TextInput
                    label="Name"
                    mode="outlined"
                   onChangeText={name => setName(name)}
                    />
                </View>
                <View style={styles.inputconatiner}>
                    <TextInput
                    label="Email"
                    mode="outlined"
                 onChangeText={email =>setEmail(email)}
                    />
                </View>
                <View style={styles.inputconatiner}>
                    <TextInput
                    label="Mobile number"
                    mode="outlined"
                   onChangeText={phone =>setPhone(phone)}
                    />
                </View>
                <View style={styles.inputconatiner}>
                    <TextInput
                    label="Job"
                    mode="outlined"
                   onChangeText={job =>setJob(job)}
                    />
                </View>
               
                <Button mode="contained" style={styles.button}  onPress={()=> submitData()}>
                    <Text>Save  </Text>
                    <MaterialCommunityIcons name="content-save-all-outline" size={18}/>
                </Button>
                <Button mode="contained" style={styles.button}  onPress={()=>{navigation.navigate('Home')}}>
                    <Text>Go to home  </Text>
                    <MaterialCommunityIcons name="content-save-all-outline" size={18}/>
                </Button>
            </View>
        </View>
    )
    }
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    inputconatiner:{
        width:350,
        top:250,
        left:30


    },
    button:{
        backgroundColor:'black',
        width:130,
        top:300,
        left:130,
        margin:10
    }
})
export default Create;