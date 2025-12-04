import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    value?: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    options: SelectOption[];
}

export function Select({ value, onValueChange, placeholder, options }: SelectProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const selectedOption = options.find(opt => opt.value === value);

    return (
        <>
            <TouchableOpacity
                style={styles.trigger}
                onPress={() => setModalVisible(true)}
            >
                <Text style={[styles.text, !selectedOption && styles.placeholder]}>
                    {selectedOption ? selectedOption.label : placeholder || 'Sélectionner...'}
                </Text>
                <Ionicons name="chevron-down" size={20} color="#999" />
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{placeholder || 'Sélectionner'}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Ionicons name="close" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.option,
                                        value === item.value && styles.optionSelected
                                    ]}
                                    onPress={() => {
                                        onValueChange(item.value);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={[
                                        styles.optionText,
                                        value === item.value && styles.optionTextSelected
                                    ]}>
                                        {item.label}
                                    </Text>
                                    {value === item.value && (
                                        <Ionicons name="checkmark" size={20} color="#007AFF" />
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
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
        flex: 1,
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
        maxHeight: '70%',
        borderWidth: 1,
        borderColor: '#333',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    optionSelected: {
        backgroundColor: '#0a0a0a',
    },
    optionText: {
        fontSize: 16,
        color: '#fff',
    },
    optionTextSelected: {
        color: '#007AFF',
        fontWeight: '600',
    },
});

