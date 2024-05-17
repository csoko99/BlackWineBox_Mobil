import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './App.style.js';
import { LoginPage } from './pages/login.js';
import { RegisterPage } from './pages/register.js';
import { HomePage} from './pages/home.js';
import { ProfilePage } from './pages/profile.js';
import { ShowProduct} from './pages/show_product.js';
import { ProductsPage } from './pages/products.js';
import { InfoPage } from './pages/info.js';
import { Cart } from './pages/cart.js';


const Stack = createNativeStackNavigator();

const NavigationTheme = {
  dark: false,
  colors: {
    primary: '#414aff',
    background: '#ffffff',
    card: '#f1953c',
    text: '#333',
    border: '#000',
    notification: '#000',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          //header: () => null,
          contentStyle: { backgroundColor: '#ffffff' },
        }}
      >
      
      <Stack.Screen
          name="Bejelentkezés"
          component={ LoginPage }
          options={{
            title: 'Bejelentkezés'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />

      <Stack.Screen
          name="Home"
          component={ HomePage }
          options={{
            title: 'WineBox'
          }}
        />

       
        <Stack.Screen
          name="Info"
          component={ InfoPage }
          options={{
            title: 'Információ'
          }}
        style={styles.element}
          theme={NavigationTheme}
        />

        <Stack.Screen
          name="Cart"
          component={ Cart }
          options={{
            title: 'Kosár'
          }}
        style={styles.element}
          theme={NavigationTheme}
        />
        
        <Stack.Screen
          name="Regisztráció"
          component={ RegisterPage }
          options={{
            title: 'Regisztráció'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        
        <Stack.Screen
          name="Profil"
          component={ ProfilePage }
          options={{
            title: 'Profil'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Előfizetés"
          component={ ShowProduct }
          options={{
            title: 'Előfizetés'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />

        <Stack.Screen
          name="Mistery Boxok"
          component={ ProductsPage }
          options={{
            title: ' Mistery Boxok '
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;