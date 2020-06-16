import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


  class App extends React.Component{
    render(){
      const rankedarray = ['First', 'Second', 'Third', 'Fourth']
      const mylist = rankedarray.map(data=>{
        return <Text style={{fontSize:20, color:"white", margin:"3%"}}>{data}</Text>
      }
      
      )
  
    
    return (
      <View style={styles.container}>
        {mylist}
      </View>
    );
    }
  }
  export default App;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#282C34',

    },
  });