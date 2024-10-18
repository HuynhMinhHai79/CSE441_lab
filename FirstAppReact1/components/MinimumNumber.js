import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

const MinNumber = () => {
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [num3, setnum3] = useState('');

  const findMinNumber = () => {
    // const n1 = parseFloat(num1);
    // const n2 = parseFloat(num2);
    // const n3 = parseFloat(num3);
    const min = Math.min(num1, num2, num3);
    Alert.alert('Success', `Min number: ${min}`);
  };

  return (
    <View>
      <Text>Number 1:</Text>
      <TextInput onChangeText={setnum1}></TextInput>
      <Text>Number 2:</Text>
      <TextInput onChangeText={setnum2}></TextInput>
      <Text>Number 3:</Text>
      <TextInput onChangeText={setnum3}></TextInput>
      <Button title="Find" onPress={findMinNumber} />
    </View>
  );
};

export default MinNumber;