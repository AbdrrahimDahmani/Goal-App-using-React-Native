import { StyleSheet, Text,TextInput, View, Button } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler(){ 
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      enteredGoalText
    ])
   };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style ={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalContainer}>
        {courseGoals.map((goal) => (<Text key={courseGoals.index} style={styles.goalItem}>{goal}</Text>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer :{
    flex : 1,
    paddingTop :'50%',
    paddingHorizontal : 16
  },
  inputContainer :{
    flexDirection : 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingBottom : 24,
    paddingRight: 15,
   
  },
  textInput:{
    borderWidth:1,
    borderColor : '#cccccc',
    width :'80%',
    marginRight : 10,
    padding: 10
  },
  goalContainer : {
    paddingTop: 15,
    borderTopWidth: 1,
    borderBottomColor: '#cccccc',
  },
  goalItem:{
     marign:8,
     borderRadius:6,
     backgroundColor :'purple',
     color:'white'
  }
});
