import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Settings, Map, Home, Briefcase, Menu, User, X } from 'lucide-react-native';
import { navStyles } from '../styles/AppStyles'; // Import styles

// NOTE: In a real Expo Router app, you'd use the Tab component for the BottomNav
// and Link/useRouter for navigation, but we'll stick to your function-based approach for now.

// --- 1. NavMenu (Dropdown) ---
export const NavMenu = ({ onNavigate }) => {
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
    <View style={navStyles.menuContainer}>
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

// --- 2. BottomNavigation ---
export const BottomNavigation = ({ activePage, onNavigate }) => {
    // We assume the page names match the routes in the `onNavigate` handler
    const navItems = [
        { name: 'Maps', icon: Map, route: 'Maps' },
        { name: 'Home', icon: Home, route: 'Home', isHome: true },
        { name: 'Jobs', icon: Briefcase, route: 'Jobs' },
    ];

    return (
        <View style={navStyles.bottomNav}>
            {navItems.map((item, index) => {
                const isActive = activePage === item.route;
                
                // Determine base styles
                let itemStyle = navStyles.navItem;
                let textStyle = navStyles.navText;

                // Apply special styles for the center Home button
                if (item.isHome) {
                    itemStyle = [itemStyle, navStyles.homeNavItem];
                    textStyle = [textStyle, navStyles.homeNavText];
                }

                // Apply active styles
                if (isActive) {
                    textStyle = [textStyle, navStyles.activeNavText];
                    if (item.isHome) {
                        itemStyle = [itemStyle, navStyles.activeHomeNav]; // Placeholder for a unique active home style
                        textStyle = [textStyle, navStyles.activeHomeNavText];
                    }
                }

                return (
                    <TouchableOpacity 
                        key={index}
                        onPress={() => onNavigate(item.route)} 
                        style={itemStyle}
                    >
                        <item.icon 
                            color={isActive ? '#2563eb' : '#9ca3af'} 
                            size={24} 
                        />
                        <Text style={textStyle}>{item.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};