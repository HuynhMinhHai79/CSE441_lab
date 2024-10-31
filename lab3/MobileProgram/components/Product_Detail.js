import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

const Product_Detail = () => {
    const productId = 1; // Hardcoded product ID for demo purposes
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch product details when the component mounts
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product data");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product details: ", error);
            } finally {
                setLoading(false); // Stop loading spinner once data is fetched
            }
        };
        fetchProduct();
    }, []);

    // Display loading spinner while fetching data
    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#6200ee" />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card>
                <Card.Cover source={{ uri: product.thumbnail }} />
                <Card.Content>
                    <Title style={styles.title}>{product.title}</Title>
                    <Paragraph style={styles.description}>{product.description}</Paragraph>
                    <Paragraph>Price: ${product.price}</Paragraph>
                    <Paragraph>Discount: {product.discountPercentage}%</Paragraph>
                    <Paragraph>Rating: {product.rating} stars</Paragraph>
                    <Paragraph>Stock: {product.stock} units</Paragraph>
                    <Paragraph>Brand: {product.brand}</Paragraph>
                    <Paragraph>Category: {product.category}</Paragraph>
                </Card.Content>
                <Card.Actions style={styles.actions}>
                    <Button mode="contained" style={styles.button}>
                        Delete
                    </Button>
                    <Button mode="contained" style={styles.button}>
                        Cancel
                    </Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        marginBottom: 8,
        fontSize: 22,
        fontWeight: "bold",
    },
    description: {
        marginBottom: 16,
        color: "#6b6b6b",
    },
    actions: {
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: 8,
    },
    button: {
        width: 100,
        marginHorizontal: 2,
    },
});
export default Product_Detail;