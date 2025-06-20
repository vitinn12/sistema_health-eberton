import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState(null);

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    let bmr = 0;
    if (gender.toLowerCase() === 'masculino') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else if (gender.toLowerCase() === 'feminino') {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    setResult(bmr.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Calorias</Text>

        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Gênero (masculino/feminino)"
          value={gender}
          onChangeText={setGender}
        />

        <Button title="Calcular" onPress={calculateCalories} />

        {result && (
          <Text style={styles.result}>Calórico diários: {result} kcal</Text>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  card: {
    width: '40%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8, borderRadius: 5
  },
  result: { marginTop: 20, fontSize: 18, color: 'green' }
});