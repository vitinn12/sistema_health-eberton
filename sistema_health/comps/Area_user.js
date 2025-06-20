import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {imc} from './Imc';
import {calorias} from './CalculadoraCalorias';



export default function Area_user() {
  const navigation = useNavigation();

  return (
   <View style={styles.container}>
    <Text style={styles.titulo}>Sistema Health</Text>
    <Text style={styles.subtitulo}>Usuário: admin</Text>
    <Text style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('imc')}> 
            <Text style={styles.textoBotao}>Calcular IMC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('calorias')}>
            <Text style={styles.textoBotao}>Calcular Calorias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('')}>
            <Text style={styles.textoBotao}>Guia Nutricional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('')}>
            <Text style={styles.textoBotao}>Meditação</Text>
        </TouchableOpacity>
    </Text>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2a2a2a',
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: 'light',
    marginBottom: 20,
    marginLeft: 2,
    color: '#2a2a2a',
  },
  usuario: {
    fontSize: 18,
    marginBottom: 30,
    color: '#444',
  },
  botoesContainer: {
    width: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  botao: {
    width: '47%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  textoBotao: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
});