import React from 'react';
import {Text} from 'react-native';

class Login extends React.Component{
	render(){
		return (
			<Text style={salon.Judul}>{this.props.title}
			</Text>
			)
	}
}

const salon = {
	Judul:{
		color: "#3e0123",
		fontSize: 75,
		fontWeight: 'bold'
	}
}

export default Judul;