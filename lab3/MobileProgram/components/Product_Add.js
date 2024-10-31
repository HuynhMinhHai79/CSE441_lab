import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Product_Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: [images],
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Alert.alert("Success", "Product has been added successfully!");
      setTitle('');
      setDescription('');
      setPrice('');
      setDiscountPercentage('');
      setRating('');
      setStock('');
      setBrand('');
      setCategory('');
      setImages('');
    })
    .catch((error) => {
      console.error(error);
      Alert.alert("Error", "There was an error adding the product.");
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add a Product</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Discount Percentage</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter discount percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}
      />

      <Text style={styles.label}>Rating</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter rating"
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}
      />

      <Text style={styles.label}>Stock</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter stock"
        keyboardType="numeric"
        value={stock}
        onChangeText={setStock}
      />

      <Text style={styles.label}>Brand</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter brand"
        value={brand}
        onChangeText={setBrand}
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Images</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter images URL(s)"
        value={images}
        onChangeText={setImages}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0000ff',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#4682B4',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Product_Add;
