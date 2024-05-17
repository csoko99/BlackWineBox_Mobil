import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../App.style.js';


export const HomePage = ({ navigation }) => {
  return (
    <React.Fragment >
    <View style={styles.navcontainer}>

    <TouchableOpacity
        title="Profil"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Profil')
        }
      >
        <Text style={styles.navigationtext}>Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Mistery Boxok"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Mistery Boxok')
        }
      >
        <Text style={styles.navigationtext}>Mistery Boxok</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Info"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Info')
        }
      >
         <Text style={styles.navigationtext}>Info</Text>
      </TouchableOpacity>

      <TouchableOpacity
      title="Kosár "
      style={styles.navigation}
      onPress={() => navigation.navigate('Cart')
      } 
      >
        <Text style={styles.navigationtext}>Kosár</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Térkép"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Térkép')
        }
      >
        <Text style={styles.navigationtext}>Térkép</Text>
      </TouchableOpacity>
      
    </View>
    </React.Fragment>
  );
};
