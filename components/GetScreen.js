import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const GetScreen = () => {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);

  const handleGet = () => {
    // Implement your GET request logic here using the "id" state
    // Update the "result" state with the response data
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error('GET error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>GET Method</Text>
      <TextInput
        placeholder="Enter ID"
        style={styles.input}
        value={id}
        onChangeText={setId}
      />
      <TouchableOpacity onPress={handleGet} style={styles.button}>
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableOpacity>
      {result && (
        <Text style={styles.result}>Result: {JSON.stringify(result)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ffb366',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default GetScreen;
