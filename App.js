import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import ToDo from './components/ToDo';

export default function App() {
  const [todo, setTodo] = useState()
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if(todo === null){
      alert("You have to introduce a to do")
    }else{
      Keyboard.dismiss()
      setTodos([...todos, todo])
      setTodo(null)
    }
  }

  const completeTodo = (i) => {
    let todosCopy = [...todos]
    todosCopy.splice(i, 1)
    setTodos(todosCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.todosBox}>
        <Text style={styles.title}>To Do's</Text>

        <View style={styles.createTodo}>
          <TextInput style={styles.input} placeholder='Add to do' onChangeText={text => setTodo(text)} value={todo} />
          <TouchableOpacity onPress={addTodo}>
            <View style={styles.button} >
              <Text style={styles.textButton} >+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.items}>
          {
            todos.length > 0 ? 
            todos.map( (todo, index) => {
              return <TouchableOpacity style={styles.item} key={index} onPress={() => completeTodo(index)} >
                <ToDo text={todo}/>
              </TouchableOpacity>
            }) :
            <Text style={styles.noTodo}>There're no to do's</Text>
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3DEDC'
  },
  todosBox: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20
  },
  createTodo:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    height: 50
  },
  input:{
    backgroundColor: "#FFF",
    width: "75%",
    height: "100%",
    flexWrap: "wrap",
    borderRadius: 25,
    paddingLeft: 10
  },
  button:{
    backgroundColor: "#FFF",
    height: "100%",
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton:{
    fontSize: 30
  },
  items: {
    alignItems: "center"
  },
  item: {
    width: "100%"
  },
  noTodo:{
    fontSize: 20
  }
});
