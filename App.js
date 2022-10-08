import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function getUserGoalInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addUserGoal() {
    setGoals((previousGoals) => [
      ...previousGoals,
      { text: enteredGoalText, key: Math.random().toString },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.goalsInputContainer}>
        <TextInput
          style={styles.primaryTextInput}
          onChangeText={getUserGoalInput}
        />
        <Button title="Add Goal" color="#5e0acc" onPress={addUserGoal} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
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

  primaryTextInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    paddingHorizontal: 8,
  },

  goalsInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    paddingBottom: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
    flex: 1,
  },

  goalsContainer: {
    flex: 9,
  },

  goalItem: {
    marginTop: 8,
    padding: 8,
    borderBottomColor: "#5e0acc",
    borderBottomWidth: 1,
  },

  goalText: {
    color: "black",
  },
});
