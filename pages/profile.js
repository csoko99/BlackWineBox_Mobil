import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../App.style.js';

export const ProfilePage = (props) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const callProfile = async () => {
      try {
        const response = await fetch('https://theapp.artidas.hu/blackwinebox/mobile/user/profile');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    callProfile();
  }, []);

  return (
    <View style={styles.container}>

      {!data ? (
         <Text>Loading...</Text>
        ):(
        <View>
      <ScrollView >
        <View style={{padding:10, width:'100%', height:150, }}>
          <TouchableOpacity>
            <Image source={require('../kepek/placeholder.jpg')} style={{width:'100%', height:140,borderRadius:5 }}>
            </Image>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', width:'100%'}}>
          <TouchableOpacity>
            <Image source={require('../kepek/logo.png')} style={{width:100, height:100, borderRadius:100, marginTop:-110}}>
            </Image>
          </TouchableOpacity>
          <Text style={{fontSize:24, fontWeight:'bold', color:'#35424a'}}>Név: {data.payload.nick_name}</Text>
          <Text style={{fontSize:16, color:'#555555'}}>Email: {data.payload.email}</Text>
          <Text style={{fontSize:16, fontWeight:'bold', color:'#35424a'}}>Egyenleg: {data.payload.budget}</Text>
        </View>
        <View>
        
          <ScrollView>
          <Text style={{fontSize:18, color:'#35424a', fontWeight:'bold', margin:10, marginTop:10}}>Előfizetéseim:</Text>
          <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            
          {data.payload.user_own_products.map((product) => (
        <TouchableOpacity
          key={product.id}
          onPress={() =>
            props.navigation.navigate('Előfizetés', {
              product_id: product.product_id,
              url: product.img_url,
              name: product.name,
              desc: product.desc,
              desc: product.description,
              price: product.price,
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
          </ScrollView>
        </View>
      </ScrollView>
      </View>
    ) }
    </View>
  );
  
  
};
