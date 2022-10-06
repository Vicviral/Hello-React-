import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.goalsInputContainer}>
        <TextInput style={styles.primaryTextInput} />
        <Button title="Add Goal" />
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 20,
    flex: 1,
  },

  primaryTextInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    paddingHorizontal: 8,
  },

  goalsContainer: {
    flex: 9,
  },
});
