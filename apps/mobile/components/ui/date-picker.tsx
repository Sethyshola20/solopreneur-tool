import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface DatePickerProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function DatePicker({ value, onChange, placeholder }: DatePickerProps) {
    const [show, setShow] = useState(false);
    const [tempDate, setTempDate] = useState(value ? new Date(value) : new Date());

    const formatDate = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    const formatDisplayDate = (dateStr?: string) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toLocaleDateString('fr-FR');
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
        if (Platform.OS === 'android') {
            setShow(false);
            if (selectedDate) {
                onChange(formatDate(selectedDate));
            }
        } else {
            // iOS: update temp date
            if (selectedDate) {
                setTempDate(selectedDate);
            }
        }
    };

    const handleConfirm = () => {
        onChange(formatDate(tempDate));
        setShow(false);
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.trigger}
                onPress={() => {
                    setTempDate(value ? new Date(value) : new Date());
                    setShow(true);
                }}
            >
                <Text style={[styles.text, !value && styles.placeholder]}>
                    {value ? formatDisplayDate(value) : placeholder || 'Sélectionner une date'}
                </Text>
                <Ionicons name="calendar-outline" size={20} color="#999" />
            </TouchableOpacity>

            {Platform.OS === 'ios' && show && (
                <Modal
                    visible={show}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setShow(false)}
                >
                    <TouchableOpacity
                        style={styles.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setShow(false)}
                    >
                        <View style={styles.modalContent}>
                            <View style={styles.iosHeader}>
                                <TouchableOpacity
                                    style={styles.iosButton}
                                    onPress={() => setShow(false)}
                                >
                                    <Text style={styles.iosButtonText}>Annuler</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.iosButton, styles.iosButtonPrimary]}
                                    onPress={handleConfirm}
                                >
                                    <Text style={[styles.iosButtonText, styles.iosButtonTextPrimary]}>OK</Text>
                                </TouchableOpacity>
                            </View>
                            <DateTimePicker
                                value={tempDate}
                                mode="date"
                                display="spinner"
                                onChange={handleDateChange}
                                locale="fr-FR"
                                style={styles.picker}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
            )}

            {Platform.OS === 'android' && show && (
                <DateTimePicker
                    value={tempDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    locale="fr-FR"
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    trigger: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#0a0a0a',
        minHeight: 44,
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
    placeholder: {
        color: '#666',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#1a1a1a',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    iosHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    picker: {
        backgroundColor: '#1a1a1a',
    },
    iosButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    iosButtonPrimary: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
    },
    iosButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    iosButtonTextPrimary: {
        fontWeight: '600',
    },
});

