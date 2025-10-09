// components/Auth/LoginCard.jsx
import { useState } from 'react'; // <-- Import useState
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LogIn } from 'lucide-react-native';
import { loginStyles } from '../../styles/AppStyles'; 

export default function LoginCard({ onSignIn }) { // <-- Accepts the onSignIn function from parent
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView 
      style={loginStyles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      <View style={loginStyles.card}>
        <Text style={loginStyles.title}>Better Routes</Text>
        <Text style={loginStyles.subtitle}>Field Service Login</Text>

        <View style={loginStyles.inputGroup}>
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            style={loginStyles.input}
            onChangeText={setEmail}
            value={email} // <-- Controlled input
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={loginStyles.input}
            onChangeText={setPassword}
            value={password} // <-- Controlled input
          />
          <View style={loginStyles.optionsRow}>
            <View style={loginStyles.checkboxPlaceholder}> 
              <Text style={loginStyles.checkboxText}>Remember Me</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Forgot Password')}>
              <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Call the onSignIn prop with current email and password */}
        <TouchableOpacity
          onPress={() => onSignIn(email, password)}
          style={loginStyles.signInButton}
        >
          <LogIn color="white" size={20} style={loginStyles.signInIcon} />
          <Text style={loginStyles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}