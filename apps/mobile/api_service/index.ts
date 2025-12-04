// Use localhost in development, production URL otherwise
const getApiBaseUrl = () => {
    if (process.env.EXPO_PUBLIC_API_BASE_URL) {
        return process.env.EXPO_PUBLIC_API_BASE_URL;
    }
    // Check if we're in development mode (Expo sets this automatically)
    // @ts-ignore - __DEV__ is a global in React Native/Expo
    if (typeof __DEV__ !== 'undefined' && __DEV__) {
        // For Expo, use your local machine's IP or localhost
        // You can also use your local network IP if testing on a physical device
        return 'http://localhost:3000/api';
    }
    return 'https://solopreneur.sethylaleye.com/api';
};

const API_BASE_URL = getApiBaseUrl();

export interface RequestOptions extends Omit<RequestInit, 'body'> {
    data?: any;
}

export interface APIResponse<T> {
    data: T | null;
    error: string | null;
}

export const request = async <T = any>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<APIResponse<T>> => {
    const { method, data, headers, ...rest } = options;
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestInit = {
        method,
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        ...rest,
    };

    if (data && method !== 'GET') {
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        if (response.status === 204) {
            return {} as APIResponse<T>;
        }
        const finalData = await response.json();

        return finalData as APIResponse<T>;
    } catch (error) {
        console.error("API Request Failed:", error);
        throw error;
    }
};

