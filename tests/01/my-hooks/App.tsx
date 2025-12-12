import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [quantity, setQuantity] = useState<number>(12);

  const decrement = () => {
    setQuantity(quantity - 1);
    console.log(quantity)
  }

  const increment = () => {
    setQuantity(quantity + 1)
    console.log(quantity)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={decrement} />
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title="+" onPress={increment} />      
      </View>
      <StatusBar style="auto" />      
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
  textLabel: {
    fontSize: 22,
    marginLeft: 15,
    marginRight: 15
  },
  buttonRow: {
    flexDirection: "row"
  }
});
