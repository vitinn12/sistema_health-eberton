import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Area_user() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.card}>
        <Text style={styles.titulo}>Sistema Health</Text>
        <Text style={styles.subtitulo}>Usuário: admin</Text>
        <View style={styles.botoescard}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('imc')}>
            <Text style={styles.textoBotao}>Calcular IMC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CalculadoraCalorias')}>
            <Text style={styles.textoBotao}>Calcular Calorias</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('')}>
            <Text style={styles.textoBotao}>Guia Nutricional</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('')}>
            <Text style={styles.textoBotao}>Meditação</Text>
          </TouchableOpacity>
        </View>


      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',

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
  card: {
    width: '60%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,

  },
  botoescard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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