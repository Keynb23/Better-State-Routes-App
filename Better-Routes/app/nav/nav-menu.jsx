import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const navItems = [
    { name: 'Map', target: 'map' },
    { name: 'Jobs List', target: 'jobs' },
    { name: 'Profile Settings', target: 'profile' },
    // A placeholder for a future sign-out option
    { name: 'Sign Out (Placeholder)', target: 'logout', isLogout: true }, 
];

// This component represents the content inside the hamburger menu (drawer).
export default function NavMenu() {
    const router = useRouter();

    // Handler now uses router.push to navigate
    const handleNavigation = (target) => {
        console.log(`Navigating to: ${target}`);
        // Use router.push() to navigate to the desired path (e.g., /map, /jobs)
        // If the path is 'logout', we'll temporarily push back to the root login screen ('/')
        if (target === 'logout') {
            router.push('/');
        } else {
            router.push(`/${target}`);
        }
    };

    return (
        <View style={styles.menuContainer}>
            {/* App Header/Logo Area */}
            <View style={styles.headerArea}>
                <Text style={styles.headerText}>Better Routes</Text>
            </View>

            {/* Navigation Links */}
            <View style={styles.linkGroup}>
                {navItems.map((item) => (
                    <TouchableOpacity 
                        key={item.target} 
                        style={[styles.linkWrapper, item.isLogout && styles.logoutWrapper]} 
                        onPress={() => handleNavigation(item.target)}
                    >
                        <Text style={[styles.linkText, item.isLogout && styles.logoutText]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

// --- Stylesheet ---
const styles = StyleSheet.create({
    // Main container for the navigation menu/drawer
    menuContainer: {
        flex: 1,
        backgroundColor: '#002547', // Darker Blue background
        paddingTop: 50,
    },
    // Area displaying the app name at the top of the menu
    headerArea: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 10,
    },
    // Text style for the app name header
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    // Wrapper for all navigation links
    linkGroup: {
        flex: 1,
    },
    // Style for each individual menu item wrapper
    linkWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    },
    // Text style for menu item names
    linkText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
    },
    // Specific style for the sign out button wrapper
    logoutWrapper: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(30, 136, 229, 0.2)', // Light primary blue background
    },
    // Specific text style for the sign out button
    logoutText: {
        color: '#1e88e5', // Primary Blue text color
        fontWeight: 'bold',
    },
});
