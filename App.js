import { StyleSheet, Text,TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style ={styles.textContainer} placeholder='Your course goal!'/>
        <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer :{
    padding :50,
  },
  inputContainer :{
    flexDirection : 'row',
    justifyContent:'space-between'
  },
  textContainer:{
    borderWidth:1,
    borderColor : '#cccccc',
    width :'80%',
    marginRight : 10,
    padding: 10
  }
});
