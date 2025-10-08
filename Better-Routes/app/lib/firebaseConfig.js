// Import the core functions needed from the SDKs
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; // Imports for Auth + Persistence
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // Storage import for persistence
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyBf1-lLaCmCqSZuUn6v-vvrRwJ_TesX1D8",
  authDomain: "better-state-llc.firebaseapp.com",
  projectId: "better-state-llc",
  storageBucket: "better-state-llc.firebasestorage.app",
  messagingSenderId: "1000941778539",
  appId: "1:1000941778539:web:3211eee5c4977ee5e0a32e",
  // measurementId: "G-RDF4SD6CR1" 
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 1. Authentication Service - Initialized with React Native AsyncStorage for Persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// 2. Firestore Database Service 
export const db = getFirestore(app); 

// 3. Storage Service
export const storage = getStorage(app);