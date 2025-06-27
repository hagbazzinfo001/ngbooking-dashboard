const BASE_URL = 'https://api.ngbookings.com/api';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        response.status,
        data.message || data.error || 'An error occurred'
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Network or other errors
    throw new ApiError(
      0,
      'Network error. Please check your connection and try again.'
    );
  }
}

export const authApi = {
  signup: async (data: {
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
  }) => {
    return apiRequest('/user_auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  login: async (data: {
    email: string;
    password: string;
  }) => {
    return apiRequest('/user_auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};