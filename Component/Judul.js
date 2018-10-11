import React,{Component}from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';

export default class Judul1 extends Component{
	redirect()
	{
		Alert.alert("This Button is ready")

	}
	render(){
		return(
				<View style={styles.container}>
					<Image source ={require('./3.jpg')} style={{width: 150, height: 150}}/>

					<Text style={warna.yoi}> Salmaa Nur Faadhilah </Text>
					<Text style={salon.salma}> XI RPL 3 </Text>
					<Button title="					Next					" color="#cd5555" onPress ={() => {this.redirect()}}/>
				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ea8a8a',
  }
});

const warna = {
	yoi : {
		color : "#774898",
		fontSize : 15,
		fontWeight : 'bold',
		margin : 100,
		marginTop : 10,
		justifyContent : 'center'

	}
}

const salon = {
	salma: {
		color : "#774898",
		fontSize : 15,
		fontWeight : 'bold',
		margin : 100,
	}
}
