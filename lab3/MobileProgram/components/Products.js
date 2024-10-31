import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

const ProductList = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';
  useEffect(() => {
    // Alert.alert(filePath);
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>Price: ${item.price}</Text>
        <Text style={{color: 'green'}}>
          Discount: {item.discountPercentage}%
        </Text>
        <Text>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>

        <View style={styles.buttonRow}>
          <Button title="DETAIL" />
          <Button title="ADD" />
          <Button title="DELETE" color="red" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 15,
  },
  info: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default ProductList;