import * as React from 'react';
import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Login React-Native</Text>
      <TextInput placeholder="Email"
        style={{height:40, width:200,borderColor:'black', borderWidth:1,margin:10}}
        placeholderTextColor="gray"
        underlineColorAndroid="transparent"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />
      <TextInput placeholder="Password"
        style={{height:40, width:200,borderColor:'black', borderWidth:1,margin:10}}
        underlineColorAndroid="transparent"
        placeholderTextColor="gray"
        secureTextEntry={true}
        onChangeText={pass => setPass(pass)}
        defaultValue={pass}
      />
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{backgroundColor:'pink'}} >
          <Text >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'yellow'}} onPress={()=>navigation.navigate('register')}>
        <Text >Register</Text>
        </TouchableOpacity>
      </View>
      


    </View>
  );
}

function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  submitRegister = (email,pass) => {
    // auth().createUserWithEmailAndPassword(email,pass).catch(function(error) {});
    alert(email);
    navigation.navigate('login');
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Register React-Native</Text>
      <TextInput placeholder="Email"
        style={{height:40, width:200,borderColor:'black', borderWidth:1,margin:10}}
        placeholderTextColor="gray"
        underlineColorAndroid="transparent"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />
      <TextInput placeholder="Password"
        style={{height:40, width:200,borderColor:'black', borderWidth:1,margin:10}}
        underlineColorAndroid="transparent"
        placeholderTextColor="gray"
        secureTextEntry={true}
        onChangeText={pass => setPass(pass)}
        defaultValue={pass}
      />
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{backgroundColor:'pink'}} onPress={()=>navigation.navigate('login')}>
          <Text > Back to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'yellow'}} onPress={() => this.submitRegister(email, pass)}>
        <Text >Register</Text>
        </TouchableOpacity>
      </View>
      


    </View>
  );
}

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
