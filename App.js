import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';

const instructions = Platform.select({});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (



      <View style={styles.container}>
      <Judul title="BIODATA"/>
      <Judul title="LOGIN"/>
          <Text>Halloooooo<Text/>
          <Text>Nama Siswa : Salmaa</Text>>
          <Text>Kelas : XI RPL 3</Text>
          <Text>No : 35</Text>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6de6c',
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
