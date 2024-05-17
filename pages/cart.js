import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import cartData from './cartData.js'; 

export const Cart = (props) => {

  const data = props.cartData || cartData;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Kosár</Text>
      {data.length > 0 ? (
        data.map((item) => (
          <View key={item.product_id} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Image source={{ uri: item.url }} style={{ height: 50, width: 50, borderRadius: 10 }} />
            <Text style={{ marginRight: 10 }}>{item.name}</Text>
            <Text>{item.price} Ft</Text>
            <TouchableOpacity><Text></Text></TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>A kosár üres</Text>
      )}
    </View>
  );
};


<Cart cartData={cartData} />;
