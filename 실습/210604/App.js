import React from 'react';
import { StyleSheet, View} from 'react-native';
import MyButton from './MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton title="MyButton title" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
