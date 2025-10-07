import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput, // Used for input fields
  Platform,  // Used for conditional styling (e.g., shadow/elevation)
  KeyboardAvoidingView, // Good practice for input forms
  ScrollView 
} from 'react-native';
import { 
  LogIn, 
  Settings, 
  Map, 
  Home, 
  Briefcase, 
  Menu, 
  User, 
  X 
} from 'lucide-react-native';

// --- Consolidated NavMenu Component (Converted to React Native) ---
const NavMenu = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavigation = (route) => {
    onNavigate(route);
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Home', icon: Home, route: 'Home' },
    { name: 'Jobs', icon: Briefcase, route: 'Jobs' },
    { name: 'Maps', icon: Map, route: 'Maps' },
    { name: 'Profile', icon: User, route: 'Profile' },
  ];

  return (
    <View style={navStyles.container}>
      <TouchableOpacity 
        onPress={toggleMenu} 
        style={navStyles.menuButton}
      >
        {isOpen ? <X color="white" size={24} /> : <Menu color="white" size={24} />}
      </TouchableOpacity>

      {isOpen && (
        <View style={navStyles.dropdown}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                navStyles.menuItem, 
                index < menuItems.length - 1 && navStyles.menuItemBorder
              ]}
              onPress={() => handleNavigation(item.route)}
            >
              <item.icon color="#3b82f6" size={20} style={navStyles.menuIcon} />
              <Text style={navStyles.menuText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

// --- Main HomeScreen Component (Converted to React Native) ---
const HomeScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState('Home'); 
  const handleNavigation = (page) => {
    setActivePage(page);
    console.log(`Navigating to ${page}`);
  };

  // --- Pre-Auth UI (Login Screen) ---
  const LoginUI = (
    // Use KeyboardAvoidingView for forms to prevent keyboard obstruction
    <KeyboardAvoidingView 
      style={loginStyles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      <View style={loginStyles.card}>
        {/* Replaced <h1> with <Text> */}
        <Text style={loginStyles.title}>Better Routes</Text>
        <Text style={loginStyles.subtitle}>Field Service Login</Text>

        <View style={loginStyles.inputGroup}>
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            style={loginStyles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={loginStyles.input}
          />
          <View style={loginStyles.optionsRow}>
            {/* React Native does not have a native Checkbox/Label combo, 
               so we use a simple view/text placeholder for now. 
               A library like 'expo-checkbox' would be needed for a real checkbox. */}
            <View style={loginStyles.checkboxPlaceholder}> 
              <Text style={loginStyles.checkboxText}>Remember Me</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Forgot Password')}>
              <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setIsAuthenticated(true)}
          style={loginStyles.signInButton}
        >
          <LogIn color="white" size={20} style={loginStyles.signInIcon} />
          <Text style={loginStyles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );

  // --- Post-Auth UI (Home Dashboard) ---
  const DashboardUI = (
    // Use ScrollView so content can scroll if necessary
    <ScrollView contentContainerStyle={dashboardStyles.scrollViewContent}>
      <View style={dashboardStyles.contentContainer}>
        {/* Replaced <h2> with <Text> */}
        <Text style={dashboardStyles.greeting}>Good Morning, John</Text>
        
        {/* Time Tracking Card */}
        <View style={dashboardStyles.card}>
          <View style={dashboardStyles.statusRow}>
            <Text style={dashboardStyles.statusTitle}>Current Status</Text>
            <View style={dashboardStyles.statusBadge}>
              <Text style={dashboardStyles.statusBadgeText}>Clocked In</Text>
            </View>
          </View>
          <Text style={dashboardStyles.timeText}>
            04:30<Text style={dashboardStyles.hoursText}> hrs</Text>
          </Text>
          <TouchableOpacity 
            onPress={() => console.log('Clock Out')}
            style={dashboardStyles.clockOutButton}
          >
            <Text style={dashboardStyles.clockOutButtonText}>Clock Out</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Stats/Weather/First Job Card Placeholder */}
        <View style={dashboardStyles.placeholderCard}>
          <Text style={dashboardStyles.placeholderText}>
            [First Job/Quick Stat Card Placeholder]
          </Text>
        </View>
        
        {/* Active Page Indicator */}
        <Text style={dashboardStyles.activePageText}>
          Simulated Active Page: {activePage}
        </Text>
      </View>
    </ScrollView>
  );

  return (
    <View style={mainStyles.appContainer}>
      
      {/* Fixed Header */}
      {isAuthenticated && (
        <View style={mainStyles.header}>
          <TouchableOpacity 
            onPress={() => handleNavigation('Settings')} 
            style={mainStyles.settingsButton}
          >
            <Settings color="#4b5563" size={24} />
          </TouchableOpacity>
          
          <Text style={mainStyles.headerTitle}>Better Routes</Text>

          <NavMenu onNavigate={handleNavigation} />
        </View>
      )}

      {/* Main Content Area */}
      <View style={mainStyles.mainContent}>
        {isAuthenticated ? DashboardUI : LoginUI}
      </View>

      {/* Fixed Bottom Navigation */}
      {isAuthenticated && (
        <View style={mainStyles.bottomNav}>
          
          {/* Bottom Left: Maps Button */}
          <TouchableOpacity 
            onPress={() => handleNavigation('Maps')} 
            style={mainStyles.navItem}
          >
            <Map color={activePage === 'Maps' ? '#2563eb' : '#9ca3af'} size={24} />
            <Text style={[mainStyles.navText, activePage === 'Maps' && mainStyles.activeNavText]}>Maps</Text>
          </TouchableOpacity>

          {/* Bottom Center: Home Button */}
          <TouchableOpacity 
            onPress={() => handleNavigation('Home')} 
            style={[mainStyles.navItem, mainStyles.homeNavItem, activePage === 'Home' && mainStyles.activeHomeNav]}
          >
            <Home color={activePage === 'Home' ? '#2563eb' : '#9ca3af'} size={24} />
            <Text style={[mainStyles.navText, mainStyles.homeNavText, activePage === 'Home' && mainStyles.activeHomeNavText]}>Home</Text>
          </TouchableOpacity>

          {/* Bottom Right: Jobs Button */}
          <TouchableOpacity 
            onPress={() => handleNavigation('Jobs')} 
            style={mainStyles.navItem}
          >
            <Briefcase color={activePage === 'Jobs' ? '#2563eb' : '#9ca3af'} size={24} />
            <Text style={[mainStyles.navText, activePage === 'Jobs' && mainStyles.activeNavText]}>Jobs</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

// --- STYLESHEETS (Separated for clarity) ---

const mainStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f9fafb', // bg-gray-50
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64, // h-16
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Android shadow
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 40,
  },
  settingsButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937', // text-gray-800
  },
  mainContent: {
    flex: 1,
    paddingTop: 64, // pt-16 (to clear the header)
    paddingBottom: 64, // pb-20 (to clear the bottom nav)
    justifyContent: 'center', // for unauthenticated screen
    alignItems: 'center', // for unauthenticated screen
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64, // h-16
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Android shadow
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb', // border-gray-200
    zIndex: 40,
  },
  navItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  navText: {
    fontSize: 10,
    color: '#9ca3af', // text-gray-500
  },
  activeNavText: {
    color: '#2563eb', // text-blue-600
    fontWeight: '600',
  },
  homeNavItem: {
    transform: [{ scale: 1.1 }],
    marginTop: -8, // Move up slightly
    backgroundColor: '#eff6ff', // bg-blue-50
    borderTopWidth: 2,
    borderTopColor: '#2563eb',
    borderTopLeftRadius: 12, // rounded-t-xl
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  homeNavText: {
    fontSize: 12,
    fontWeight: '600',
  },
  activeHomeNavText: {
    color: '#2563eb',
  }
});

const loginStyles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    padding: 32, // p-8
    width: '90%',
    maxWidth: 384, // max-w-sm
    backgroundColor: 'white',
    borderRadius: 24, // rounded-3xl
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
  title: {
    fontSize: 36, // text-4xl
    fontWeight: '800', // font-extrabold
    color: '#2563eb', // text-blue-600
    textAlign: 'center',
    marginBottom: 24, // mb-6
  },
  subtitle: {
    textAlign: 'center',
    color: '#6b7280', // text-gray-500
    marginBottom: 32, // mb-8
  },
  inputGroup: {
    gap: 20, // space-y-5
  },
  input: {
    width: '100%',
    padding: 16, // p-4
    borderWidth: 1,
    borderColor: '#d1d5db', // border-gray-300
    borderRadius: 12, // rounded-xl
    fontSize: 16,
    // Note: Focus styling is not available via StyleSheet
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  checkboxPlaceholder: {
    // Placeholder for checkbox area
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8, // ml-2
    color: '#4b5563', // text-gray-600
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#2563eb', // text-blue-600
    fontSize: 14,
  },
  signInButton: {
    width: '100%',
    marginTop: 32, // mt-8
    paddingVertical: 16, // py-4
    backgroundColor: '#2563eb',
    borderRadius: 12, // rounded-xl
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInIcon: {
    marginRight: 12, // mr-3
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // text-lg
  }
});

const dashboardStyles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, // Allows content to fill space when scrollable
    paddingTop: 0, // Header padding is handled by mainStyles.mainContent
    paddingBottom: 0, // Nav padding is handled by mainStyles.mainContent
  },
  contentContainer: {
    flex: 1,
    padding: 16, // p-4
    paddingTop: 0,
  },
  greeting: {
    fontSize: 24, // text-3xl
    fontWeight: 'bold',
    color: '#1f2937', // text-gray-800
    marginBottom: 16, // mb-4
  },
  card: {
    backgroundColor: 'white',
    padding: 24, // p-6
    borderRadius: 16, // rounded-2xl
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f3f4f6', // border-gray-100
    marginBottom: 24, // mb-6
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12, // mb-3
  },
  statusTitle: {
    fontSize: 16, // text-lg
    fontWeight: '600', // font-semibold
    color: '#4b5563', // text-gray-600
  },
  statusBadge: {
    paddingHorizontal: 12, // px-3
    paddingVertical: 4, // py-1
    backgroundColor: '#d1fae5', // bg-green-100
    borderRadius: 9999, // rounded-full
  },
  statusBadgeText: {
    color: '#047857', // text-green-700
    fontWeight: 'bold',
    fontSize: 12, // text-sm
  },
  timeText: {
    fontSize: 48, // text-5xl
    fontWeight: '800', // font-extrabold
    color: '#111827', // text-gray-900
    marginBottom: 16, // mb-4
  },
  hoursText: {
    fontSize: 24, // text-3xl
    color: '#6b7280', // text-gray-500
  },
  clockOutButton: {
    width: '100%',
    paddingVertical: 12, // py-3
    backgroundColor: '#ef4444', // bg-red-500
    borderRadius: 8, // rounded-lg
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  clockOutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeholderCard: {
    flex: 1,
    backgroundColor: '#f3f4f6', // bg-gray-100
    padding: 24, // p-6
    borderRadius: 16, // rounded-2xl
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1, // shadow-inner
    borderWidth: 1,
    borderColor: '#e5e7eb', // border-gray-200
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#9ca3af', // text-gray-500
    textAlign: 'center',
    fontWeight: '500', // font-medium
  },
  activePageText: {
    marginTop: 16, // mt-4
    textAlign: 'center',
    fontSize: 12, // text-sm
    color: '#9ca3af', // text-gray-400
  }
});

const navStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 50,
  },
  menuButton: {
    padding: 8,
    backgroundColor: '#2563eb', // blue-600
    borderRadius: 9999, // rounded-full
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdown: {
    position: 'absolute',
    top: 50, // Below the button
    right: 0,
    width: 192, // w-48
    backgroundColor: 'white',
    borderRadius: 12, // rounded-xl
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontWeight: '500',
    color: '#4b5563',
  }
});