import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState ([]);

  const onHandlerChange = (text) => {
  setTask(text)
}

const onHandlerSubmit =() => {
  setTask([
    ...tasks,
    {id: Math.random().toString(),
      Value: task

    }



  ]);
  setTask('');

}





  return (
    <View style={styles.container}>
      <View style={styles.imputconainer}>
        <TextInput style={styles.imput} 
        placeholder='añadea la lista'
        autoCapitalize='none'
        autoCorrect={false} 
        autoComplete= 'off'
        value={task}
        onChangeText={onHandlerChange}

        />
        <Button disabled={!task} title='añadir' color='#F32B99'onPress={onHandlerSubmit} />
        
      </View>
      <View style={styles.listContainer}>
          {
          tasks.map((item) => (
            <View style={styles.itemContainer}>
             <Text key={item.id}>{item.value}</Text>
             </View>
          ))
          
          
          }



        </View>
     
    </View>

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  imputConainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20,

  },
  imput:{
    width: '75%',
    borderBottomColor: '#171214',
    borderBottomWidth: 1,
    height: 50,
    color:'#7E636E'
    
  },
  listContainer: {
    marginHorizontal: 20,
    margintop: 20,
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: '#D8DCD0',
    marginBottom: 10,
    boderRadius: 10,
  },

  itemList:{
    fontSize: 14,
    color: '#ffffff',
    fontWeigth: 'bold',
  }
});
