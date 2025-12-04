import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useSettings, useSaveSettings } from '@/hooks/use-settings';
import { SettingsSchema } from '@/lib/validators/settings';
import { authClient } from '@/lib/auth/auth-client';
import { useRouter } from 'expo-router';
import { showToast } from '@/lib/toast';

export default function SettingsScreen() {
    const { data: settings, isLoading } = useSettings();
    const saveSettings = useSaveSettings();
    const router = useRouter();

    const [formData, setFormData] = useState<SettingsSchema>({
        companyName: '',
        siret: '',
        address: '',
        email: '',
        logoUrl: '',
        legalMentions: '',
    });

    useEffect(() => {
        if (settings) {
            setFormData({
                companyName: settings.companyName || '',
                siret: settings.siret || '',
                address: settings.address || '',
                email: settings.email || '',
                logoUrl: settings.logoUrl || '',
                legalMentions: settings.legalMentions || '',
            });
        }
    }, [settings]);

    const handleSave = () => {
        saveSettings.mutate(formData, {
            onSuccess: () => {
                showToast.success('Paramètres sauvegardés');
            },
            onError: (error) => {
                showToast.error(error.message);
            },
        });
    };

    const handleSignOut = async () => {
        Alert.alert(
            'Déconnexion',
            'Êtes-vous sûr de vouloir vous déconnecter?',
            [
                { text: 'Annuler', style: 'cancel' },
                {
                    text: 'Déconnexion',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await authClient.signOut();
                            router.replace('/');
                        } catch (error) {
                            Alert.alert('Erreur', 'Impossible de se déconnecter');
                        }
                    },
                },
            ]
        );
    };

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>Chargement...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Informations de l'entreprise</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nom de l'entreprise</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.companyName}
                        onChangeText={(text) => setFormData({ ...formData, companyName: text })}
                        placeholder="Nom de l'entreprise"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>SIRET</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.siret}
                        onChangeText={(text) => setFormData({ ...formData, siret: text })}
                        placeholder="SIRET"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Adresse</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.address}
                        onChangeText={(text) => setFormData({ ...formData, address: text })}
                        placeholder="Adresse"
                        multiline
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.email}
                        onChangeText={(text) => setFormData({ ...formData, email: text })}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Sauvegarder</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
                    <Text style={styles.signOutButtonText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    section: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
        color: '#fff',
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        color: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#0a0a0a',
        color: '#fff',
    },
    saveButton: {
        backgroundColor: '#000',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    signOutButton: {
        backgroundColor: 'transparent',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    signOutButtonText: {
        color: '#FF3B30',
        fontSize: 16,
        fontWeight: '600',
    },
});

