import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Clock, Map, Beaker, Truck, User, Home as HomeIcon } from 'lucide-react-native';

// Helper component for quick access buttons
const QuickAccessButton = ({ title, icon: Icon, href }) => (
  <Link href={href} asChild>
    <TouchableOpacity style={styles.button}>
      <Icon size={32} color="#3b82f6" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </Link>
);

export default function DashboardLandingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, Employee!</Text>
      <Text style={styles.subheader}>Your Day At A Glance</Text>
      
      <View style={styles.buttonContainer}>
        {/* Quick Access to the Time Tracker (new dedicated route) */}
        <QuickAccessButton 
          title="Clock In/Out" 
          icon={Clock} 
          // Link to the TimeTracker.jsx screen we created
          href="/(app)/TimeTracker" 
        />
        
        {/* Quick Access to Jobs List */}
        <QuickAccessButton 
          title="View Routes" 
          icon={Truck} 
          href="/(app)/Jobs" 
        />
        
        {/* Quick Access to Route Map */}
        <QuickAccessButton 
          title="View Map" 
          icon={Map} 
          href="/(app)/Maps" 
        />

        {/* Quick Access to Chemicals */}
        <QuickAccessButton 
          title="Inventory" 
          icon={Beaker} 
          href="/(app)/Chemicals" 
        />
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusHeader}>Current Status</Text>
        <Text style={styles.statusDetail}>Shift: Clocked Out</Text>
        <Text style={styles.statusDetail}>Next Job: 123 Main St (Pending)</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: '#f4f7f9' },
  header: { fontSize: 32, fontWeight: '800', color: '#1f2937', marginBottom: 10 },
  subheader: { fontSize: 18, fontWeight: '600', color: '#6b7280', marginBottom: 20 },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    width: '48%', // Allows two buttons per row with a small gap
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#3b82f6',
    textAlign: 'center',
  },
  statusCard: {
    backgroundColor: '#d1fae5',
    padding: 20,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#10b981',
  },
  statusHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#065f46',
    marginBottom: 10,
  },
  statusDetail: {
    fontSize: 16,
    color: '#065f46',
    marginBottom: 5,
  },
});