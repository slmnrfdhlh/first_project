import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,Button,Image,TouchableOpacity,Alert } from 'react-native';

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source ={require('./qwe.png')} style={{width: 100, height: 100}}/>
      <TextInput
        style = {styles.inputBox}
        placeholder ="Username"
        onChangeText={(text) => this.setState({text})}
      />
      <TextInput
         style = {styles.inputBox}
        placeholder = "Password"
        secureTextEntry = {true}
      />
      <Button
         onPress = {() => {this.props.navigation.navigate('Judul')}}
         style = {styles.button}
         title = " Login  "
         color = "#cd5555"
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#ea8a8a',
  },

  inputBox : {
    width : 250,
    fontSize : 13,
    color : '#0000'
  },
  button : {
    width : 250,
    height : 40,
    alignItems : 'center',
    backgroundColor : '#3B5998',
    marginVertical : 10,
    paddingHorizontal : 60,
  flexDirection : 'row',
  justifyContent : 'space-between'
  }
});
