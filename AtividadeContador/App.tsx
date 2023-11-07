import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import CounterScreen from './src/screens/CounterScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <CounterScreen />
    </SafeAreaView>
  );
}

export default App;