import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';


import theme from './src/theme';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SignIn />
    </ThemeProvider>
  );
}

