import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { authClient } from '@/lib/auth/auth-client';
import { z } from 'zod';
import { showToast } from '@/lib/toast';

type SignUpData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const signinSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

const signupSchema = z.object({
    name: z.string().max(20),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
}).refine((data: SignUpData) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export default function LoginScreen() {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSignIn = async () => {
        try {
            const validated = signinSchema.parse({
                email: formData.email,
                password: formData.password,
            });

            setLoading(true);
            const result = await authClient.signIn.email({
                email: validated.email,
                password: validated.password,
            });

            if (result.data) {
                showToast.success('Connexion réussie');
                router.replace('/(tabs)');
            }
        } catch (error: any) {
            showToast.error(error.message || 'Erreur de connexion');
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async () => {
        try {
            const validated = signupSchema.parse(formData);

            setLoading(true);
            const result = await authClient.signUp.email({
                name: validated.name,
                email: validated.email,
                password: validated.password,
            });

            if (result.data) {
                showToast.success('Inscription réussie');
                router.replace('/(tabs)');
            }
        } catch (error: any) {
            showToast.error(error.message || 'Erreur lors de l\'inscription');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <Text style={styles.title}>Solopreneur Tool</Text>
                    <Text style={styles.subtitle}>Votre outil privé de gestion micro‑entreprise</Text>

                    <View style={styles.tabs}>
                        <TouchableOpacity
                            style={[styles.tab, !isSignUp && styles.tabActive]}
                            onPress={() => setIsSignUp(false)}
                        >
                            <Text style={[styles.tabText, !isSignUp && styles.tabTextActive]}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tab, isSignUp && styles.tabActive]}
                            onPress={() => setIsSignUp(true)}
                        >
                            <Text style={[styles.tabText, isSignUp && styles.tabTextActive]}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.form}>
                        {isSignUp && (
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Name</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formData.name}
                                    onChangeText={(text) => setFormData({ ...formData, name: text })}
                                    placeholder="Name"
                                    placeholderTextColor="#666"
                                    autoCapitalize="words"
                                />
                            </View>
                        )}

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.email}
                                onChangeText={(text) => setFormData({ ...formData, email: text })}
                                placeholder="your@email.com"
                                placeholderTextColor="#666"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.password}
                                onChangeText={(text) => setFormData({ ...formData, password: text })}
                                placeholder="••••••••"
                                placeholderTextColor="#666"
                                secureTextEntry
                            />
                        </View>

                        {isSignUp && (
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Confirm Password</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formData.confirmPassword}
                                    onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                                    placeholder="••••••••"
                                    placeholderTextColor="#666"
                                    secureTextEntry
                                />
                            </View>
                        )}

                        <TouchableOpacity
                            style={[styles.button, loading && styles.buttonDisabled]}
                            onPress={isSignUp ? handleSignUp : handleSignIn}
                            disabled={loading}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? 'Chargement...' : isSignUp ? 'Sign Up' : 'Sign In'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 24,
    },
    card: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginBottom: 32,
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 24,
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        padding: 4,
    },
    tab: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        borderRadius: 6,
    },
    tabActive: {
        backgroundColor: '#000',
    },
    tabText: {
        fontSize: 16,
        color: '#999',
        fontWeight: '500',
    },
    tabTextActive: {
        color: '#fff',
        fontWeight: '600',
    },
    form: {
        gap: 16,
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
    button: {
        backgroundColor: '#000',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
