import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Keyboard
} from 'react-native';
import StatusInput from "../../components/statusInput";

class Login extends React.PureComponent{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      isEnabled:false,//选择框
      showInputText:false,
      error:false,
      errorType : 0
    }
  }

  inEmail = (email) => {
    this.setState({email});
  }

  inPas = (password) => {
    this.setState({password});
  }

  toggleSwitch = () => {
    this.setState({isEnabled:!this.state.isEnabled});
  }

  createAccount = () => {
    this.props.navigation.navigate("CreateAccount")
  }

  login = () => {
    Keyboard.dismiss();
    this.setState({error:!this.state.error})
  }

  render (){
    let {email,password,isEnabled,showInputText,error,errorType} = this.state;
    console.log('--->',email,password);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={[styles.container]}>
            <View>
              <Text style={styles.title}>Login</Text>
              {/* <View style={{position:"relative",marginTop:30}}>
                <TextInput 
                  style={[styles.inputText]}
                  onChangeText={this.inEmail}
                  value = {email}
                  placeholder="Email"
                  placeholderTextColor="#727272"
                  onFocus={()=>{this.setState({showInputText:true})}}
                  onBlur = {()=>{
                    if(!!email || !!password){ return ;}
                    this.setState({showInputText:false})
                  }}
                />
                {showInputText?<Text style={[styles.inputAbsolute]}>Email</Text>:null}
              </View> */}
              <Text></Text>
              <StatusInput 
                style={{marginTop:35}}
                onChangeText={this.inEmail}
                placeholder={"Email"}
                error = {error}
              />
              <View style={[styles.flexRow,{marginTop:25,position:"relative"}]}>
                {/* <TextInput 
                  style={[styles.inputText,{flex:1}]}
                  onChangeText={this.inPas}
                  value = {password}
                  placeholder="Password"
                  placeholderTextColor="#727272"
                  secureTextEntry = {true}
                /> */}
                <StatusInput 
                  style={{flex:1}}
                  onChangeText={this.inPas}
                  placeholder={"Password"}
                  error = {error}
                />
                <View style={{height:50,width:50,backgroundColor:"#dc6e35",borderRadius:10,overflow:"hidden",marginLeft:15}} />
                {showInputText?<Text style={[styles.inputAbsolute]}>Password</Text>:null}
              </View>
              <View style={[styles.chooseRemember]}>
                <View style={[styles.checkbox]}></View>
                <Text style={[styles.remText]}>Remember Me</Text>
              </View>
              <TouchableOpacity style={[styles.button,{backgroundColor:"#dc6e35",marginTop:35}]} onPress={this.login}>
                <Text style={[styles.buttonText]}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.forgetButton,{marginTop:20}]} onPress={this.login}>
                <Text style={[styles.forgetText]}>Forgot password?</Text>
              </TouchableOpacity>
              <View style={[styles.register]}>
                <Text style={[styles.registerText]}>Don't have an account yet?</Text>
                <TouchableOpacity style={[styles.registerButton]} onPress={this.createAccount}>
                  <Text style={[styles.registerButtonText]}>Create Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:30,
    justifyContent:"center",
    marginTop:80,
  },
  title:{
    color: "#dc6e35",
    fontSize:26,
    fontWeight:"bold",
    letterSpacing:1
  },
  inputText:{
    height:50,
    borderColor:"#707070",
    borderWidth:1,
    borderStyle:"solid",
    borderRadius:10,
    paddingLeft:15,
    fontSize:16,
    fontWeight:"500",
  },
  flexRow:{
    flexDirection:"row"
  },
  checkbox:{
    height:15,
    width:15,
    borderRadius:5,
    borderColor:"#707070",
    borderWidth:1,
    borderStyle:"solid",
  },
  chooseRemember:{
    flexDirection: "row",
    alignItems:"center",
    marginTop:25
  },
  remText:{
    color: "#727272",
    fontSize:14,
    marginLeft:15
  },
  button:{
    height:50,
    // marginLeft:30,
    borderColor: '#dc6e35',
    borderWidth:1,
    borderStyle:"solid",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },
  buttonText:{
    color:"#ffffff",
    fontSize:16
  },
  forgetButton:{
    height:50,
    justifyContent:"center",
    alignItems:"center",
  },
  forgetText:{
    color:"#dc6e35",
    fontSize: 16,
    textDecorationColor:"#dc6e35",
    textDecorationStyle:"solid",
    textDecorationLine:"underline"
  },
  register:{
    marginTop:110,
    flexDirection:"row"
  },
  registerText:{
    color:"#4b4b4b",
    fontSize:15
  },
  registerButton:{
    paddingHorizontal:10
  },
  registerButtonText:{
    color:"#3599d3",
    fontSize: 15,
    textDecorationColor:"#3599d3",
    textDecorationStyle:"solid",
    textDecorationLine:"underline"
  },
  inputAbsolute:{
    position:"absolute",
    left:13,
    fontSize:13,
    color: "#4b4b4b",
    top:-7,
    backgroundColor:"#f2f2f2",
    paddingHorizontal:3
  }
});

export default Login;
