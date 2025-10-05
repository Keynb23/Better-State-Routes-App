// login page(app loads in here)

// auto login/remember me/faceid/fingerprint or whatever they have on their phone.
// firebase for backend and auth

import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import NavMenu from './nav/nav-menu';

// Use a local placeholder image, assuming one exists or can be replaced.
const LOGO_URL = require('../assets/icon.png'); 

export default function LoginScreen() {
    // Retaining state for controlled inputs, but removing auth-related states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Dummy functions for button presses
    const handleLogin = () => {
        console.log('Login pressed with email:', email);
    };

    const handleRegister = () => {
        console.log('Register pressed with email:', email);
    };
    
    // Main Login Form
    return (
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
            <NavMenu/>
            <View style={styles.heroContainer}>
                {/* Logo */}
                <Image 
                    source={LOGO_URL} 
                    style={styles.logoImage} 
                />
                
                {/* App Name */}
                <Text style={styles.appNameText}>
                    BETTER ROUTES
                </Text>

                {/* Status/User ID Display */}
                {/* Simplified static welcome message for layout preview */}
                <Text style={styles.statusText}>
                    Welcome to Better Routes. Please Log In or Register.
                </Text>
                
                {/* Email Input */}
                <TextInput
                    style={styles.inputField}
                    placeholder="Email Address"
                    placeholderTextColor="#ccc"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Password Input */}
                <TextInput
                    style={styles.inputField}
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Error Message (Placeholder) */}
                {/* Error display area placeholder */}
                <Text style={styles.errorPlaceholderText}>
                    (Error messages will appear here)
                </Text>

                {/* Login Button */}
                <TouchableOpacity 
                    style={styles.buttonWrapper} 
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>
                        LOG IN
                    </Text>
                </TouchableOpacity>

                {/* Register Button */}
                <TouchableOpacity 
                    style={styles.secondaryButtonWrapper} 
                    onPress={handleRegister}
                >
                    <Text style={styles.secondaryButtonText}>
                        CREATE ACCOUNT
                    </Text>
                </TouchableOpacity>
            </View>
            
            {/* Footer Contact Bar - Kept for professional branding */}
            <View style={styles.footerContainer}>
                <Text style={styles.contactDetailText}>
                    For support, contact: betterstatemo@gmail.com
                </Text>
            </View>
        </ScrollView>
    );
}

// --- Stylesheet (All styles at the bottom) ---
const styles = StyleSheet.create({
  // Container for initial loading state (No longer used, but kept for clarity)
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c2e56',
  },
  // Text for initial loading (No longer used)
  loadingText: {
      marginTop: 10,
      color: '#fff',
      fontSize: 16,
  },
  // Main content container for scrolling and centering
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  // Style for the main dark blue hero/login section
  heroContainer: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 64,
    backgroundColor: '#0c2e56', // Deep Navy Navy Blue
    flex: 1, // Ensures this section takes up most space
  },
  // Style for the logo image
  logoImage: {
    width: 96,
    height: 96,
    marginBottom: 24,
    borderRadius: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  // Style for the main app name text
  appNameText: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#ffffff',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  // Text to display current authentication status or user ID
  statusText: {
    fontSize: 14,
    color: '#a0a0a0',
    marginBottom: 30,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  // Style for email and password input fields
  inputField: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1e88e5',
  },
  // Style for the primary login button wrapper
  buttonWrapper: {
    marginTop: 30,
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#1e88e5', // Primary Blue
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  // Style for the button text
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  // Style for the secondary register button wrapper
  secondaryButtonWrapper: {
    marginTop: 15,
    width: '80%',
    paddingVertical: 15,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    marginBottom: 20,
  },
  // Style for the secondary button text
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  // Style for when a button is disabled (No longer used)
  buttonDisabled: {
    opacity: 0.5,
  },
  // Style for displaying error messages
  errorText: {
    color: '#ff6b6b',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  // Style for the error message display placeholder text
  errorPlaceholderText: {
    color: '#ff6b6b',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 12,
    fontStyle: 'italic',
    opacity: 0.5,
  },
  // Style for the bottom contact bar
  footerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#002547', // Darker Blue
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#0c2e56',
  },
  // Style for the support email text in the footer
  contactDetailText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.9)',
  },
});
