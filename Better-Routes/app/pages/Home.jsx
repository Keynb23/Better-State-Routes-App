import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'; // <-- Import Alert
import { Settings } from 'lucide-react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; // <-- Import Firebase Auth function
import { auth } from '../lib/firebaseConfig';
import { mainStyles, dashboardStyles } from '../styles/AppStyles';

// ... other imports ...

// Since Home.jsx is the entry point, we use it for the Login UI
export default function Home() {
    // We remove the local 'isAuthenticated' state. 
    // Authentication status will now be read globally by _layout.jsx.
    const [activePage, setActivePage] = useState('Home'); 
    const [isClockedIn, setIsClockedIn] = useState(true);

    const handleNavigation = (page) => {
        // ... navigation logic (will be replaced by router in production)
        setActivePage(page);
        console.log(`Navigating to ${page}`);
    };

    const handleSignIn = async (email, password) => { // <-- Now an async function
        try {
            await signInWithEmailAndPassword(auth, email, password);
            
            // Authentication successful.
            // DO NOT change local state here. 
            // The Firebase listener in _layout.jsx handles the redirect automatically.
            console.log('User signed in successfully! Redirect handled by _layout.jsx');

        } catch (error) {
            console.error('Firebase Login Error:', error.message);
            // Display a user-friendly error message
            Alert.alert('Login Failed', 'Invalid email or password. Please check your credentials.');
        }
    };

    const handleClockOut = () => {
        // ... (Existing clock-out logic)
        setIsClockedIn(false);
        console.log('Clock Out recorded.');
    };

    // ... DashboardUI definition remains the same (minus the temporary state logic)

    // Since Home.jsx is the page at '/', Expo Router will render it.
    // We want the app layout (header/bottom nav) to be defined by a component 
    // that only renders *if* authenticated. 
    
    // TEMPORARY: Reverting Home.jsx to be purely the **Login Screen**
    // to align with the Expo Router Auth Guard pattern.
    // Once authenticated, the user will be redirected to a dedicated tabs/nav component.

    return <LoginCard onSignIn={handleSignIn} />;
}