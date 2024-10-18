import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View, StyleSheet} from 'react-native';

const Hailstone = () => {
  const [num, setNum] = useState();

  const getHailStone = n => {
    const result = [];
    while (n !== 1) {
      result.push(n);
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }
    result.push(1);
    Alert.alert('Hailstone Sequence', result.join(' '));
  };

  return (
    <View style={styles.container}>
      <Text>Enter the number: </Text>
      <TextInput onChangeText={setNum} placeholder="Nhập số nguyên dương" />
      <Button
        title="Find"
        onPress={() => {
          getHailStone(num);
        }}
      />
    </View>
  );
};

export default Hailstone;