// app/(app)/_layout.jsx
import { Tabs } from 'expo-router';
import { User, Home, Clock } from 'lucide-react-native'; // Import Clock icon

export default function AppLayout() {
  return (
    // Set a default header for all screens in this group
    <Tabs screenOptions={{ tabBarActiveTintColor: '#3b82f6', headerShown: true }}> 
      
      {/* 1. Dashboard Tab - Entry point after login */}
      <Tabs.Screen
        name="index" // Points to app/(app)/index.jsx (your renamed Home.jsx)
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
          // We will use the 'headerShown: false' trick on the index.jsx file 
          // to implement the custom header there.
        }}
      />
      
      {/* 2. Profile/Settings Tab (Keep for easy access) */}
      <Tabs.Screen
        name="Profile" // Points to app/(app)/Profile.jsx
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />

      {/* 3. Dedicated TimeTracker Screen (Hidden from the bottom tab bar) */}
      <Tabs.Screen
        name="TimeTracker" // Points to app/(app)/TimeTracker.jsx
        options={{
          title: 'Clock In/Out',
          tabBarIcon: ({ color }) => <Clock size={24} color={color} />,
          tabBarButton: () => null, // <-- HIDES THE TAB BUTTON
        }}
      />
      
      {/* 4. Other Screens (Hidden from the tab bar) */}
      <Tabs.Screen name="Jobs" options={{ tabBarButton: () => null }} />
      <Tabs.Screen name="Maps" options={{ tabBarButton: () => null }} />
      <Tabs.Screen name="Chemicals" options={{ tabBarButton: () => null }} />

    </Tabs>
  );
}