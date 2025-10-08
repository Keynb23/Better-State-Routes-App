// /app/(app)/index.jsx (The new Dashboard Screen)
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Clock, CheckCircle } from 'lucide-react-native';
// You might need to import your dashboard styles here, if they are separate.

export default function DashboardScreen() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0); // Time in seconds
  
  // Use a ref or state for the timer interval
  useEffect(() => {
    let interval = null;

    if (isClockedIn) {
      // Start the timer
      interval = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isClockedIn && elapsedTime !== 0) {
      // Clear the timer when clocked out
      clearInterval(interval);
    }
    
    // Cleanup function
    return () => clearInterval(interval);
  }, [isClockedIn]);

  const handleClockToggle = () => {
    if (isClockedIn) {
      // CLOCK OUT LOGIC
      const duration = formatTime(elapsedTime);
      Alert.alert(
        "Clock Out", 
        `You worked for ${duration}. Time logged successfully.`,
        [
          { text: "OK", onPress: () => {
            // FUTURE: Add logic here to save time to Firebase Firestore (Job Log)
            setIsClockedIn(false);
            setElapsedTime(0);
          }}
        ]
      );
    } else {
      // CLOCK IN LOGIC
      setClockInTime(new Date());
      setElapsedTime(0); // Reset for the new session
      setIsClockedIn(true);
      Alert.alert("Clocked In!", `Started shift at ${new Date().toLocaleTimeString()}.`);
    }
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    // Returns HH:MM:SS format
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Shift Tracker</Text>

      {/* Clock Display */}
      <View style={styles.timerCard}>
        <Text style={styles.timerLabel}>Current Time Logged:</Text>
        <Text style={styles.timerText}>
          {formatTime(elapsedTime)}
        </Text>
        {isClockedIn && clockInTime && (
          <Text style={styles.statusText}>
            Shift started at: {clockInTime.toLocaleTimeString()}
          </Text>
        )}
      </View>

      {/* Clock Toggle Button */}
      <TouchableOpacity
        style={[styles.clockButton, isClockedIn ? styles.clockOut : styles.clockIn]}
        onPress={handleClockToggle}
      >
        {isClockedIn 
          ? <Clock size={24} color="white" style={{marginRight: 10}} />
          : <CheckCircle size={24} color="white" style={{marginRight: 10}} />
        }
        <Text style={styles.buttonText}>
          {isClockedIn ? 'CLOCK OUT' : 'CLOCK IN'}
        </Text>
      </TouchableOpacity>

      {/* Placeholder for Current Job Status */}
      <View style={styles.jobStatus}>
        <Text style={styles.jobHeader}>Current Job Status</Text>
        <Text style={styles.jobDetail}>No active job selected.</Text>
        <Text style={styles.jobHint}>Go to 'Jobs' tab to start a route.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: '#f4f7f9' },
  header: { fontSize: 28, fontWeight: '700', color: '#1f2937', marginBottom: 30 },
  timerCard: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  timerLabel: { fontSize: 16, color: '#6b7280', marginBottom: 5 },
  timerText: { fontSize: 48, fontWeight: '800', color: '#10b981' },
  statusText: { fontSize: 14, color: '#9ca3af', marginTop: 10 },
  clockButton: {
    flexDirection: 'row',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  clockIn: { backgroundColor: '#10b981' }, // Green
  clockOut: { backgroundColor: '#ef4444' }, // Red
  buttonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  jobStatus: { padding: 20, backgroundColor: '#e0f2f1', borderRadius: 8, borderWidth: 1, borderColor: '#a7f3d0' },
  jobHeader: { fontSize: 20, fontWeight: '600', color: '#064e3b', marginBottom: 10 },
  jobDetail: { fontSize: 16, color: '#065f46' },
  jobHint: { fontSize: 14, color: '#6b7280', marginTop: 10, fontStyle: 'italic' },
});