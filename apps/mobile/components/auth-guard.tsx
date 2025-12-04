import { useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { authClient } from '@/lib/auth/auth-client';
import { View, ActivityIndicator } from 'react-native';

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            const inAuthGroup = segments[0] === 'login';
            
            if (!isAuthenticated && !inAuthGroup) {
                router.replace('/login');
            } else if (isAuthenticated && inAuthGroup) {
                router.replace('/(tabs)');
            }
        }
    }, [isAuthenticated, isLoading, segments]);

    const checkAuth = async () => {
        try {
            const session = await authClient.getSession();
            setIsAuthenticated(!!session.data);
        } catch (error) {
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }

    return <>{children}</>;
}

