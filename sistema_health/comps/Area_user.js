import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Area_user() {
  const navigation = useNavigation();

  return (
   <View style={styles.container}>
    <Text style={styles.titulo}>Sistema Health</Text>
    <Text style={styles.subtitulo}>Usuário: admin</Text>
    <Text style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pagina1')}> {/* precisa mudar o nome da página aqui */}
            <Text style={styles.textoBotao}>Quadro 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pagina2')}> {/* precisa mudar o nome da página aqui */}
            <Text style={styles.textoBotao}>Quadro 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pagina3')}> {/* precisa mudar o nome da página aqui */}
            <Text style={styles.textoBotao}>Quadro 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pagina4')}> {/* precisa mudar o nome da página aqui */}
            <Text style={styles.textoBotao}>Quadro 4</Text>
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
    width: '90%',
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