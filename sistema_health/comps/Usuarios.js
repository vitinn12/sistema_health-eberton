import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Usuarios(route) {
    const navigation = useNavigation();
    const {emailText, nomeText, telefoneText} = route.params

  return (
    <View style={styles.view}>
    <Text style={styles.textoNegrito}>Sistema Health</Text>



    </View>
  );
}

const styles = {
  view: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoNegrito: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  main: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
};