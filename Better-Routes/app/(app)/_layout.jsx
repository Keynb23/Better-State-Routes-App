import { Tabs } from 'expo-router';
import { Truck, Map, User, Beaker, Home } from 'lucide-react-native'; // Icons

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#3b82f6', headerShown: false }}>
      
      {/* 1. Dashboard Tab - Entry point after login */}
      <Tabs.Screen
        name="index" // This file will be the default page for the (app) group
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      
      {/* 2. Jobs/Routes Tab */}
      <Tabs.Screen
        name="Jobs" // You will create /app/(app)/Jobs.jsx
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color }) => <Truck size={24} color={color} />,
        }}
      />

      {/* 3. Maps/GPS Tab */}
      <Tabs.Screen
        name="Maps" // You will create /app/(app)/Maps.jsx
        options={{
          title: 'Route Map',
          tabBarIcon: ({ color }) => <Map size={24} color={color} />,
        }}
      />

      {/* 4. Chemicals Tab (Andrew's Requirement) */}
      <Tabs.Screen
        name="Chemicals" // You will create /app/(app)/Chemicals.jsx
        options={{
          title: 'Chemicals',
          tabBarIcon: ({ color }) => <Beaker size={24} color={color} />,
        }}
      />

      {/* 5. Profile/Settings Tab */}
      <Tabs.Screen
        name="Profile" // You will create /app/(app)/Profile.jsx
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
      
    </Tabs>
  );
}