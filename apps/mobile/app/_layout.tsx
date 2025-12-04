import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { Providers } from '@/components/providers';
import { AuthGuard } from '@/components/auth-guard';
import Toast from 'react-native-toast-message';
import { View, Text } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'login',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Providers>
      <AuthGuard>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </AuthGuard>
      <Toast 
        config={{
          success: (props) => (
            <View style={{
              height: 60,
              width: '90%',
              backgroundColor: '#1a1a1a',
              borderRadius: 8,
              borderLeftWidth: 4,
              borderLeftColor: '#34C759',
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600', flex: 1 }}>
                {props.text1}
              </Text>
            </View>
          ),
          error: (props) => (
            <View style={{
              height: 60,
              width: '90%',
              backgroundColor: '#1a1a1a',
              borderRadius: 8,
              borderLeftWidth: 4,
              borderLeftColor: '#FF3B30',
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600', flex: 1 }}>
                {props.text1}
              </Text>
            </View>
          ),
          info: (props) => (
            <View style={{
              height: 60,
              width: '90%',
              backgroundColor: '#1a1a1a',
              borderRadius: 8,
              borderLeftWidth: 4,
              borderLeftColor: '#007AFF',
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600', flex: 1 }}>
                {props.text1}
              </Text>
            </View>
          ),
        }}
      />
    </Providers>
  );
}
