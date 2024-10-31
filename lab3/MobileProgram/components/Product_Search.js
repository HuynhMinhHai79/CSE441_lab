import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';



const Product_Search = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  let filePath = 'https://dummyjson.com/products';

  const searchProduct = () => {
    if (value !== '') {
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    }

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((d) => {
        setData(d.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const renderItem = ({item}) => (
    <Card style={styles.card}>
      <Text style={{fontWeight: 'bold', fontSize: 20, paddingBottom: 20}}>
        Product Detail
      </Text>
      <Card.Cover source={{uri: item.thumbnail}} style={styles.image} />
      <Card.Content>
        <Title style={styles.title}>{item.title}</Title>
        <Paragraph>Description : {item.description}</Paragraph>
        <Text>Price: ${item.price}</Text>
        <Text>Discount: {item.discountPercentage}%</Text>
        <Text>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Brand: {item.brand}</Text>
        <Text>Category: {item.category}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Products</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Enter product name"
        style={styles.input}
      />
      <Button title="SEARCH" onPress={searchProduct} />
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  card: {
    marginBottom: 16,
    padding: 10,
  },
  title: {
    fontSize: 30,
  },
  header: {
    fontSize: 18,
  }
});
export default Product_Search;
