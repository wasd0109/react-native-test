import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App({ onChangeText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
        value={email}
      />
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(value) => onChangeText(value)}
        placeholder="Password"
      />
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
  textInputStyle: {
    height: 50,
    width: 300,
    backgroundColor: "gray",
    color: "white",
    marginTop: 5,
  },
});
