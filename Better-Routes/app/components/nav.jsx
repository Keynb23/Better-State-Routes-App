import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, Home, Map, Briefcase, User, X } from 'lucide-react-native';

const NavMenu = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (route) => {
    // onNavigate is assumed to be the function to handle route changes
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
    // <View> replaces <div>
    <View style={styles.container}>
      {/* <TouchableOpacity> replaces the HTML <button> for pressability */}
      <TouchableOpacity
        onPress={toggleMenu}
        style={styles.menuButton}
        // Added accessibility props for better practice
        accessible={true}
        accessibilityLabel={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? (
          <X color="white" size={24} />
        ) : (
          <Menu color="white" size={24} />
        )}
      </TouchableOpacity>

      {isOpen && (
        // Second <View> replaces the inner <div> for the dropdown
        <View style={styles.dropdown}>
          {menuItems.map((item, index) => (
            // <TouchableOpacity> replaces the HTML <button> for menu items
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, index < menuItems.length - 1 && styles.menuItemBorder]}
              onPress={() => handleNavigation(item.route)}
              accessible={true}
              accessibilityLabel={`Maps to ${item.name}`}
            >
              <item.icon color="#3b82f6" size={20} style={styles.menuIcon} />
              {/* <Text> replaces <span> */}
              <Text style={styles.menuText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

// StyleSheet for styling (replaces Tailwind/className)
const styles = StyleSheet.create({
  container: {
    // Note: The 'absolute' positioning here assumes a parent container that is either the entire screen or another positioned element.
    position: 'absolute', 
    top: 10,             
    right: 10,            
    zIndex: 50,
  },
  menuButton: {
    padding: 8,
    backgroundColor: '#2563eb', // blue-600 equivalent
    borderRadius: 9999, // rounded-full equivalent
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
  },
  dropdown: {
    position: 'absolute',
    top: 50, 
    right: 0,
    width: 192, 
    backgroundColor: 'white',
    borderRadius: 12, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10, // Android shadow
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

// Fixes the Expo Router warning for missing default export
export default NavMenu;