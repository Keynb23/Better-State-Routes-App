import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';
import { useAuth } from '../_layout'; // Assuming you exported useAuth or access auth directly

const handleLogout = async () => {
  try {
    await signOut(auth);
    // Expo Router in _layout.jsx automatically redirects to the login screen
    console.log('User signed out.');
  } catch (error) {
    console.error('Logout Error:', error.message);
    alert('Failed to log out. Please try again.');
  }
};

export default function ProfileScreen() {
    // You could display user info here if needed
    // const { user } = useAuth(); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile & Settings</Text>
            
            {/* Display logged-in user email (optional) */}
            {/* {user && <Text style={styles.detailText}>Logged in as: {user.email}</Text>} */}
            
            <View style={styles.spacer} />

            <Button 
                title="Log Out" 
                onPress={handleLogout} 
                color="#ef4444" // Red color for danger action
            />
            
            <View style={styles.spacer} />

            <Text style={styles.detailText}>
                App Version 1.0.0
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1f2937',
  },
  detailText: {
      fontSize: 14,
      color: '#6b7280',
  },
  spacer: {
      height: 30,
  }
});