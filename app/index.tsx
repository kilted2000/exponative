import React from 'react';
import { Text, View, useColorScheme, StyleSheet } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={colorScheme === 'dark' ? styles.darkText : styles.lightText}>test test test.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  lightText: {
    color: '#2563EB', // Tailwind 'blue-600'
  },
  darkText: {
    color: '#38BDF8', // Tailwind 'sky-400'
  },
});