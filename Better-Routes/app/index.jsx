// app/index.jsx - (The Root Login Screen)

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router'; // 🚨 Make sure useRouter is imported 🚨
import { signInWithEmailAndPassword } from 'firebase/auth';
// 🚨 Adjust path as needed 🚨
import { auth } from './lib/firebaseConfig'; 

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // 🚨 Hook to manually navigate 🚨

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      // 1. Attempt to sign in with Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      
      // 2. 🚨 CRITICAL FIX: Explicitly navigate to the dashboard group. 🚨
      //    router.replace prevents the user from going back to the login screen.
      router.replace('/(app)'); 
      
    } catch (error) {
      console.error('Login Error:', error);
      let errorMessage = 'Login failed. Please check your credentials.';
      // Log the specific error code to your console for better debugging
      console.error('Firebase Auth Code:', error.code); 
      
      // ... (rest of error handling)
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
        errorMessage = 'Invalid email or password.';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = 'Network error. Check your connection.';
      }
      Alert.alert('Login Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // ... (rest of the component)
  // 🚨 Return the fully updated file with the file location commented at the top of the file in one line 🚨
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Driver Login</Text>
      <Text style={styles.subheader}>Better State LLC</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#9ca3af"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9ca3af"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLogin} 
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>

      {/* Placeholder for other links like Forgot Password or Register */}
      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#f4f7f9',
  },
  header: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3b82f6',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  loginButton: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    alignItems: 'center',
  },
  linkText: {
    color: '#3b82f6',
    fontSize: 14,
  },
});