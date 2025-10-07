import { Component } from "react";
import { View, Text, StyleSheet } from "react-native"; // <-- Added StyleSheet

import HomeScreen from "./pages/Home";
import NavMenu from "./components/nav";

export default class Index extends Component {
  // If you don't use state or props in the constructor, you can omit it.
  // We'll keep it simple by removing it since it's empty.

  render() {
    return (
      // Replaced <View className="..."> with <View style={styles.container}>
      // Also removed unnecessary fragment tags (<>...</>)
      <View style={styles.container}> 
        <NavMenu onNavigate={() => {}} /> 
        <HomeScreen />
      </View>
    );
  }
}

// Add styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // This is essential for the app to fill the screen
    // Add other desired base styles here if needed
  },
});