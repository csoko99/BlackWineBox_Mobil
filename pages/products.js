import React, { useEffect,useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

export const ProductsPage = (props) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const callProducts = async () => {
      try {
        const response = await fetch('https://theapp.artidas.hu/blackwinebox/mobile/product');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
  
    callProducts();
  }, []);

    return(
        
        <ScrollView >
          {!data ? (
         <Text>Loading...</Text>
           ):(
            <View>
           {data.payload.products.map((product) => (
            console.log(product.product_id),
        <TouchableOpacity
          key={product.product_id}
          onPress={() =>
            props.navigation.navigate('Előfizetés', {
              product_id: product.product_id,
              url: product.img_url,
              name: product.name,
              desc: product.description,
              price: product.price
            })
          }>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Image source={{ uri: product.img_url }} style={{ height: 50, width: 50, borderRadius: 10 }} />
            <View style={{ marginLeft: 10 }}>
              <Text>{product.name}</Text>
              <Text>{product.price} Ft</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      </View>
      )}
          </ScrollView>
        
    )
}