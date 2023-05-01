import * as React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';

import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import theme from './styles';
import Login from './screens/login/Login';

const App = () => {
  const [fonstLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if (!fonstLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' translucent backgroundColor='transparent' />
      <View>
        <Login />
      </View>
    </ThemeProvider>
  )
};

export default App;