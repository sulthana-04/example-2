import React ,{useState,useEffect}from 'react';
import {Text, View,StyleSheet, FlatList, Alert} from 'react-native';
import {Card, FAB,Button} from 'react-native-paper';


const Home = ({navigation}) => {
    
   
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)

    const fetchData =() =>{
        fetch("http://172.20.10.4:5000/details")
         .then(res=>res.json())
         .then(results =>{
             setData(results)
             setLoading(false)
         }).catch(err=>{
             Alert.alert('Something went wrong')
         })
    }

    useEffect(() =>{
        fetchData()
    })
     
   const renderList= ((item) =>{
    return (
          <View style={styles.container}>
              <Card style={styles.mycard}
              onPress={() =>{navigation.navigate('Details',{item})}} >
                  <Text style={styles.text}>{item.name}</Text>
              </Card>
            
           </View>
           
    )
}) 
   return(
       <View style={{flex:1}}>
           <FlatList
         data={data}
        renderItem={({item}) =>{
            return renderList(item)
        }}
        keyExtractor={item=>item._id}
        onRefresh={() => fetchData()}
        refreshing={loading}
         />
       </View>
   )


  
        }
    
const styles= StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
     mycard:{
         //position:'relative',
         padding:15,
          margin:7,
         width:380,
         height:60
     },
     text:{
         fontSize:20
     },
     fab:{
         backgroundColor:'black',
       bottom:-200,
        margin:140,
         left:150,
        width:150,
    

     }
     
})
export default Home;