/**
 * 适配ios和Android样式的input
 * 目前只做了 ios input 各种状态展示
 */


import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
} from 'react-native';

class StatusInput extends React.PureComponent{
	constructor(props){
		super(props);
		this.state={
			value : "",
			showInputText:false,
			inputEnd:false
		}
	}

	inputVal = (value) =>{
		this.setState({value});
		this.props.onChangeText(value);
	} 

	onFocus = () => {
		this.setState({showInputText:true})
	}

  onBlur = () => {
		if(!(!!this.state.value)){
			this.setState({showInputText:false})
		}else{
			//验证 如果为错 就 error
			this.setState({inputEnd:true})
		}
	}

	render(){
		let {placeholder,style,error} = this.props;
		let {value,showInputText,inputEnd} = this.state;
		return (
			<>
				<View style={[style,{position:"relative"}]}>
					<TextInput 
					style={[styles.inputText,{borderColor:showInputText?error?'#c13f30':inputEnd?'#707070':'#d36535':"#707070",}]}
					onChangeText={this.inputVal}
					value = {value}
					placeholder={placeholder}
					placeholderTextColor="#727272"
					onFocus={this.onFocus}
					onBlur = {this.onBlur}
					onEndEditing={this.endEdit}
					/>
					{showInputText?<Text style={[styles.inputAbsolute,{color: error?"#c13f30":inputEnd?'#707070':"#d36535",}]}>{placeholder}</Text>:null}
				</View>
			</>
		)
	}
}

const styles =  StyleSheet.create({
	inputText: {
		height: 50,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 10,
		paddingLeft: 15,
		fontSize: 16,
		fontWeight: "500",
	},
	inputAbsolute: {
		position: "absolute",
		left: 13,
		fontSize: 13,
		top: -7,
		backgroundColor: "#f2f2f2",
		paddingHorizontal: 3
	}
})

export default StatusInput;


