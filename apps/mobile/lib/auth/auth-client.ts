import { createAuthClient } from "better-auth/react";

const getBaseUrl = () => {
    if (process.env.EXPO_PUBLIC_SITE_URL) {
        return process.env.EXPO_PUBLIC_SITE_URL;
    }
    // Use localhost in development
    // @ts-ignore - __DEV__ is a global in React Native/Expo
    if (typeof __DEV__ !== 'undefined' && __DEV__) {
        return 'http://localhost:3000';
    }
    return 'https://solopreneur.sethylaleye.com';
};

export const authClient = createAuthClient({
    baseURL: getBaseUrl(),
});

