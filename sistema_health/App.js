import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Area_user from './comps/Area_user';
import IMC from './comps/Imc';
import CalculadoraCalorias from './comps/CalculadoraCalorias';

const Stack = createNativeStackNavigator();

function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const Verificacao = () => {
    if (login === 'admin' && senha === '123456') {
      navigation.navigate('Area_user');
    } else {
      alert('Login ou senha incorretos');
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.main}>
        <Text style={styles.textoNegrito}>Tela de Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <Button title="Entrar" onPress={Verificacao} />
      </View>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Area_user" component={Area_user} />
        <Stack.Screen name="imc" component={IMC} />
        <Stack.Screen name="CalculadoraCalorias" component={CalculadoraCalorias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5, 
  },
  main: {
    width: '25%',
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    backgroundColor : 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    padding: 10,
  },
  textoNegrito: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});