import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 10, padding: 10, borderColor: "blue", borderWidth: 1 }}
      >
        Learning another piece of sh*t
      </Text>
      <Button title="Hit Me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
