import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ToDo = (props) => {
    return (
        <View style={styles.todo}>
          <Text style={styles.title}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  todo:{
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    minHeight: 40,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  title:{
    fontSize: 20
  }
})

export default ToDo