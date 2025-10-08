import { StyleSheet } from 'react-native';

// --- Consolidated Styles for the entire app ---
export const mainStyles = StyleSheet.create({
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
    // justifyContent: 'center', // for unauthenticated screen - controlled in page
    // alignItems: 'center', // for unauthenticated screen - controlled in page
  },
});

export const loginStyles = StyleSheet.create({
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
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  checkboxPlaceholder: {
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

export const dashboardStyles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16, // p-4 for the container
    paddingTop: 0,
  },
  greeting: {
    fontSize: 24, // text-3xl
    fontWeight: 'bold',
    color: '#1f2937', // text-gray-800
    marginBottom: 16, // mb-4
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
    elevation: 1,
    borderWidth: 1,
    borderColor: '#e5e7eb', // border-gray-200
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150, // Added for visibility
  },
  placeholderText: {
    color: '#9ca3af', // text-gray-500
    textAlign: 'center',
    fontWeight: '500',
  },
  activePageText: {
    marginTop: 16, // mt-4
    textAlign: 'center',
    fontSize: 12, // text-sm
    color: '#9ca3af', // text-gray-400
  }
});

export const timeCardStyles = StyleSheet.create({
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
    }
});

export const navStyles = StyleSheet.create({
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
    },
    // Nav Menu Styles (Dropdown)
    menuContainer: {
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