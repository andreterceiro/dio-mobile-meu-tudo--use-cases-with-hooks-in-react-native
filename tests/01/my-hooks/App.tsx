import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export function alert() {
  Alert.alert("oi")
}

export default function App() {
  let quantity = 12;
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={alert} />
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title="+" />      
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
    fontSize: 22
  },
  buttonRow: {
    flexDirection: "row"
  }
});
