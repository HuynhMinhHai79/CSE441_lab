import React from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

const Employee = props => {
  const handleUpdate = () => {
    Alert.alert('Success', `hello ${props.name}`);
    // console.log({name, age, occupation});
  };
  return (
    <View>
      <Text>Name :</Text>
      <TextInput>{props.name}</TextInput>
      <Text>Age :</Text>
      <TextInput>{props.age}</TextInput>
      <Text>Occupation :</Text>
      <TextInput>{props.occupation}</TextInput>
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default Employee;