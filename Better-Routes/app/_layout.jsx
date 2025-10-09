// app/_layout.jsx - (FINAL, STABLE AUTH LOGIC)
import { Stack, Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
// 🚨 Adjust path if needed. Assuming './lib/firebaseConfig' is correct.
import { auth } from './lib/firebaseConfig'; 

// 🚨 EXPORT useAuth so other screens can use it (e.g., Profile screen for logout)
export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoaded(true); 
    });
    
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return { user, isLoaded, logout };
}


export default function RootLayout() {
  const { user, isLoaded } = useAuth();
  
  if (!isLoaded) {
    return null; // Show a splash/loading screen
  }
  
  const isAuthenticated = !!user;

  // 🚨 STABLE REDIRECT LOGIC 🚨
  // If the user is NOT authenticated, force them to the login screen.
  // This bypasses the need for the 'redirect' prop on Stack.Screen, fixing the "Redirecting to a specific route" error.
  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  // If the user IS authenticated, render the full, unrestricted Stack.
  // The system will automatically land on the first defined route: the (app) group.
  return (
    <Stack>
      {/* 1. Login Screen (index.jsx): 
          This route is included but will only be *displayed* if the user is unauthenticated 
          and navigates directly to '/'. When they are authenticated, they are immediately redirected.
      */}
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />

      {/* 2. Authenticated Routes ((app) Group) - The user's main dashboard after successful login */}
      <Stack.Screen 
        name="(app)" 
        options={{ headerShown: false }}
      />
    
      {/* 3. Other Global Pages (like settings) */}
      <Stack.Screen name="pages/Settings" options={{ title: 'App Settings' }} />
    </Stack>
  );
}