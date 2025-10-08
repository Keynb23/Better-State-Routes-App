import { Stack, Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // <-- Import signOut
import { auth } from './lib/firebaseConfig'; // <-- Adjust path as needed

// A custom hook to manage the user's authentication state globally
function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This is the Firebase listener that checks the user's status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoaded(true); 
    });
    
    return () => unsubscribe();
  }, []);

  // Utility function for logging out
  const logout = () => {
    signOut(auth);
  };

  return { user, isLoaded, logout };
}

export default function RootLayout() {
  const { user, isLoaded, logout } = useAuth();
  
  if (!isLoaded) {
    return null; // Show a splash screen while loading
  }
  
  // Define if the user is authenticated
  const isAuthenticated = !!user;

  return (
    <Stack>
      {/* 1. Login Page: Hides the header. 
           If authenticated, redirect to the main app layout. 
      */}
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />

      {isAuthenticated ? (
        // 2. AUTHENTICATED ROUTES
        // This is your main authenticated content.
        <Stack.Screen 
          name="components/nav" 
          options={{ headerShown: false }} // 'nav' will handle its own header/tabs
        />
      ) : (
        // 3. UNAUTHENTICATED REDIRECT
        // If the user tries to access any authenticated route, redirect them to index (login).
        // This should not redirect if they are already on 'index'.
        <Redirect href="/" /> 
      )}

      {/* Add a basic Settings page here, which can include the Logout function 
        (assuming you move Settings.jsx outside of the nav group for now)
      */}
      <Stack.Screen name="pages/Settings" options={{ title: 'App Settings' }} />
    </Stack>
  );
}

// NOTE: You can now access the logout function via the useAuth hook 
// if you export it:
// export { useAuth };