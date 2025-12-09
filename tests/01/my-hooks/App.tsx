import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

var quantity = 12;

export function decrement(props: any) {
  quantity = quantity - 1
  console.log(quantity)
}

export function increment(props: any) {
  quantity = quantity + 1
  console.log(quantity)
}

export default function App() {
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
