import { Tabs } from 'expo-router';
import { Truck, Map, User, Beaker, Home as HomeIcon, Clock } from 'lucide-react-native';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#3b82f6', // Blue accent color
        headerShown: false,
        tabBarStyle: {
            paddingTop: 8,
            paddingBottom: 8,
            height: 65,
        }
    }}>
      
      {/* 1. Dashboard Tab: New general landing page (Home.jsx) */}
      <Tabs.Screen
        name="Home" 
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      
      {/* 2. Time Tracker Tab: Dedicated Clock In/Out Screen (TimeTracker.jsx) */}
      <Tabs.Screen
        name="TimeTracker" 
        options={{
          title: 'Clock',
          tabBarIcon: ({ color }) => <Clock size={24} color={color} />,
        }}
      />

      {/* 3. Jobs/Routes Tab - (Jobs.jsx) */}
      <Tabs.Screen
        name="Jobs" 
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color }) => <Truck size={24} color={color} />,
        }}
      />

      {/* 4. Maps Tab - (Maps.jsx) */}
      <Tabs.Screen
        name="Maps" 
        options={{
          title: 'Route Map',
          tabBarIcon: ({ color }) => <Map size={24} color={color} />,
        }}
      />

      {/* 5. Chemicals Tab - (Chemicals.jsx) */}
      <Tabs.Screen
        name="Chemicals" 
        options={{
          title: 'Chemicals',
          tabBarIcon: ({ color }) => <Beaker size={24} color={color} />,
        }}
      />

      {/* 6. Profile/Settings Tab - (Profile.jsx) */}
      <Tabs.Screen
        name="Profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
      
    </Tabs>
  );
}