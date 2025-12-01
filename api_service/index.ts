const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://solopreneur-tool.vercel.app/api';
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