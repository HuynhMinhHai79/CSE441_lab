import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons';

const UpdateServiceScreen = ({route, navigation}) => {
  const {service} = route.params;
  const [nameService, setNameService] = useState(service.name);
  const [priceService, setPriceService] = useState(service.price.toString());

  function updateService() {
    if (!nameService.trim() || !priceService.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const data = {
      name: nameService,
      price: parseInt(priceService),
    };

    axios
      .put(
        `https://kami-backend-5rs0.onrender.com/services/${service._id}`,
        data,
      )
      .then(response => {
        Alert.alert(
          'Success',
          'Service updated successfully',
          [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
          ],
          {cancelable: false},
        );
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Error', 'Failed to update service');
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={25} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Service</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Service name *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNameService}
            value={nameService}
            placeholderTextColor="#666"
            placeholder="Input a service name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={setPriceService}
            value={priceService}
            placeholderTextColor="#666"
            placeholder="0"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={updateService}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F06B7A',
    height: 50,
    paddingHorizontal: 15,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 15,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 0.2,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'black',
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    height: 50,
    backgroundColor: '#F06B7A',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdateServiceScreen;
