import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from '../style';

export default function Caculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs
  const handleNumberInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Function to handle operator inputs
  const handleOperatorInput = operator => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{displayValue}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('7')}>
            <Text style={styles.buttonText}>7</Text>
          </View>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('8')}>
            <Text style={styles.buttonText}>8</Text>
          </View>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('9')}>
            <Text style={styles.buttonText}>9</Text>
          </View>
          <View
            style={[styles.button, {backgroundColor: '#e0e0e0'}]}
            onTouchEnd={() => handleOperatorInput('/')}>
            <Text style={[styles.buttonText, styles.operation]}>÷</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('4')}>
            <Text style={styles.buttonText}>4</Text>
          </View>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('5')}>
            <Text style={styles.buttonText}>5</Text>
          </View>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('6')}>
            <Text style={styles.buttonText}>6</Text>
          </View>
          <View
            style={[styles.button, {backgroundColor: '#e0e0e0'}]}
            onTouchEnd={() => handleOperatorInput('*')}>
            <Text style={[styles.buttonText, styles.operation]}>×</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('1')}>
            <Text style={styles.buttonText}>1</Text>
          </View>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('2')}>
            <Text style={styles.buttonText}>2</Text>
          </View>
          <View style={styles.button} onTouchEnd={() => handleNumberInput('3')}>
            <Text style={styles.buttonText}>3</Text>
          </View>
          <View
            style={[styles.button, {backgroundColor: '#e0e0e0'}]}
            onTouchEnd={() => handleOperatorInput('-')}>
            <Text style={[styles.buttonText, styles.operation]}>-</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View
            style={[styles.button, {width: 200}]}
            onTouchEnd={() => handleNumberInput('0')}>
            <Text style={styles.buttonText}>0</Text>
          </View>
          <View
            style={[styles.button, {backgroundColor: '#e0e0e0'}]}
            onTouchEnd={() => handleOperatorInput('+')}>
            <Text style={[styles.buttonText, styles.operation]}>+</Text>
          </View>
          <View
            style={[styles.button, {width: 50, backgroundColor: '#ffa500'}]}
            onTouchEnd={handleEqual}>
            <Text style={[styles.buttonText, {color: 'white'}]}>=</Text>
          </View>
        </View>

        <View>
          <View
            style={[styles.button, {width: '100%'}]}
            onTouchEnd={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
