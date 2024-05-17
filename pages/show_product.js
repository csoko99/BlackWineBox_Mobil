import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../App.style.js';
import cartData from './cartData.js';

export const ShowProduct = (props) => {
  const { product_id, name, price, desc, url } = props.route.params; 

  const addToCart = () => {
      cartData.push({ product_id: product_id, name: name, price: price, desc: desc, url: url })
  };

  return (
    <View style={styles.productcontainer}>
      <Image source={{ uri: url }} style={{ height: '50%', width: '100%', margin: 10, alignSelf: 'center', borderRadius: 10 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#35424a' }}>Név: {name} + {product_id}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#35424a' }}>Ár: {price}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#35424a' }}>Leírás: {desc}</Text>
      
      <TouchableOpacity onPress={addToCart}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#35424a', marginTop: 10 }}>Kosárhoz adás</Text>
      </TouchableOpacity>
    </View>
  );
};
