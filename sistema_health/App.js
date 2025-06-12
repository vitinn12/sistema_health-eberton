import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Usuarios from './comps/Usuarios'; // Certifique-se que o caminho está correto

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (login === 'admin' && senha === '123456') {
      navigation.navigate('Usuarios');
    } else {
      alert('Login ou senha incorretos');
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.textoNegrito}>Tela de Login</Text>
      <main style={styles.main}>
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
        <Button title="Entrar" onPress={handleLogin} />
      </main>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Usuarios" component={Usuarios} />
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    backgroundColor
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