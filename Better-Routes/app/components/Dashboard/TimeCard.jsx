import { View, Text, TouchableOpacity } from 'react-native';
import { timeCardStyles } from '../../styles/AppStyles'; // Import styles

export default function TimeCard({ isClockedIn, onClockOut }) {
    // Note: The time data (04:30) would be passed as a prop from the parent component
    const hoursWorked = '04:30';

    return (
        <View style={timeCardStyles.card}>
            <View style={timeCardStyles.statusRow}>
                <Text style={timeCardStyles.statusTitle}>Current Status</Text>
                <View style={timeCardStyles.statusBadge}>
                    <Text style={timeCardStyles.statusBadgeText}>
                        {isClockedIn ? 'Clocked In' : 'Clocked Out'}
                    </Text>
                </View>
            </View>
            <Text style={timeCardStyles.timeText}>
                {hoursWorked}<Text style={timeCardStyles.hoursText}> hrs</Text>
            </Text>
            
            {isClockedIn && (
                <TouchableOpacity 
                    onPress={onClockOut}
                    style={timeCardStyles.clockOutButton}
                >
                    <Text style={timeCardStyles.clockOutButtonText}>Clock Out</Text>
                </TouchableOpacity>
            )}
            
            {/* You could add a Clock In button here for when !isClockedIn */}
        </View>
    );
}