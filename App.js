import 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TasksList from './app/components/TasksList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TasksList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
