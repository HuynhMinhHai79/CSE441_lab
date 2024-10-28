import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');

  // Tax calculation logic based on income brackets
  const calculateTax = () => {
    const incomeAmount = parseFloat(income);

    if (isNaN(incomeAmount) || incomeAmount < 0) {
      Alert.alert('Invalid Input', 'Please enter a valid positive income.');
      setTax('');
      return;
    }

    let taxAmount = 0;

    if (incomeAmount <= 10000000) {
      taxAmount = incomeAmount * 0.1;
    } else if (incomeAmount <= 50000000) {
      taxAmount = 10000000 * 0.1 + (incomeAmount - 10000000) * 0.2;
    } else {
      taxAmount =
        10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
    }

    setTax(`Income Tax: ${taxAmount.toFixed(2)}đ`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income Tax Calculator</Text>

      {/* Input field for income */}
      <TextInput
        textAlign="right"
        style={styles.input}
        placeholder="Enter your income"
        keyboardType="numeric"
        value={income}
        onChangeText={setIncome}
      />

      {/* Button to trigger tax calculation */}
      <Button title="Calculate Tax" onPress={calculateTax} />

      {/* Display calculated tax */}
      <Text style={styles.result}>{tax}</Text>
    </View>
  );
};

// Styling for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

export default IncomeTaxCalculator;
