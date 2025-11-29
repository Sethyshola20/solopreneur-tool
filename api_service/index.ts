// apiService.ts or api/index.ts

const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your actual API base URL

export interface RequestOptions extends Omit<RequestInit, 'body'> {
    data?: any; // For POST/PUT/PATCH request bodies
}

export interface APIResponse<T> {
    data: T | null;
    error: string | null;
}

// A generic utility function for making API calls
export const request = async <T = any>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<APIResponse<T>> => {
    const { method, data, headers, ...rest } = options;
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            credentials: "include",
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
            // Handle HTTP error statuses (4xx, 5xx)
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        // Handle successful response with no body (e.g., 204 No Content)
        if (response.status === 204) {
            return {} as APIResponse<T>;
        }
        const finalData = await response.json();

        return finalData as APIResponse<T>;
    } catch (error) {
        // Handle network errors or errors thrown above
        console.error("API Request Failed:", error);
        throw error; // Re-throw the error for the caller to handle
    }
};