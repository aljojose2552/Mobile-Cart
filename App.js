import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/context/AppContext';
import Home from './src/screens/Home';
import AddMobile from './src/screens/AddMobile';
import ViewAllMobiles from './src/screens/ViewAllMobiles';
import MobileDetail from './src/screens/MobileDetail';
import SplashScreen from './src/screens/SplashScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ViewAllMobilesStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="ViewAllMobiles" 
      component={ViewAllMobiles} 
      options={{ title: 'All Mobiles' }}
    />
    <Stack.Screen 
      name="MobileDetail" 
      component={MobileDetail} 
      options={{ title: 'Mobile Details' }}
    />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <SplashScreen />; // Show Splash Screen during loading
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'AddMobile') {
                iconName = 'add-circle';
              } else if (route.name === 'Mobiles') {
                iconName = 'list';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#008000',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{ title: 'Home' }} 
          />
          <Tab.Screen 
            name="AddMobile" 
            component={AddMobile} 
            options={{ title: 'Sell Mobile' }} 
          />
          <Tab.Screen 
            name="Mobiles" 
            component={ViewAllMobilesStack} 
            options={{ title: 'View Mobiles' }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
