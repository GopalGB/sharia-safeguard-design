/**
 * API client for communicating with the backend
 */

// Base API URL - in a real app, this would come from environment variables
const API_URL = 'http://localhost:8004';

// Types
export interface AuthTokens {
  access_token: string;
  token_type: string;
  user_id: string;
  name?: string;
  email: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  role: string;
}

export interface DocumentResponse {
  id: string;
  filename: string;
  content_type: string;
  status: string;
  upload_date: string;
  processing_stage?: string;
  document_type?: string;
  language?: string;
  compliance_status?: string;
  content?: string;
  entities?: Record<string, any[]>;
  compliance_issues?: any[];
}

// Helper function to get auth token from localStorage
const getAuthToken = (): string | null => {
  const authData = localStorage.getItem('auth');
  if (!authData) return null;
  
  try {
    const tokens: AuthTokens = JSON.parse(authData);
    return tokens.access_token;
  } catch (error) {
    console.error('Error parsing auth data:', error);
    return null;
  }
};

// Authentication API
export const authApi = {
  login: async (email: string, password: string): Promise<AuthTokens> => {
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);
    
    const response = await fetch(`${API_URL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    const data = await response.json();
    
    // Store tokens in localStorage
    localStorage.setItem('auth', JSON.stringify(data));
    
    return data;
  },
  
  register: async (email: string, password: string, name?: string): Promise<UserProfile> => {
    const response = await fetch(`${API_URL}/auth/register?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}${name ? `&name=${encodeURIComponent(name)}` : ''}`, {
      method: 'POST',
    });
    
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    
    return response.json();
  },
  
  getCurrentUser: async (): Promise<UserProfile> => {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Not authenticated');
    }
    
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to get user profile');
    }
    
    return response.json();
  },
  
  logout: (): void => {
    localStorage.removeItem('auth');
  },
  
  isAuthenticated: (): boolean => {
    return getAuthToken() !== null;
  },
};

// Documents API
export const documentsApi = {
  getDocuments: async (): Promise<DocumentResponse[]> => {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Not authenticated');
    }
    
    const response = await fetch(`${API_URL}/documents`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to get documents');
    }
    
    return response.json();
  },
  
  getDocument: async (id: string): Promise<DocumentResponse> => {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Not authenticated');
    }
    
    const response = await fetch(`${API_URL}/documents/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to get document');
    }
    
    return response.json();
  },
  
  uploadDocument: async (file: File): Promise<DocumentResponse> => {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Not authenticated');
    }
    
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${API_URL}/documents/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Failed to upload document');
    }
    
    return response.json();
  },
  
  analyzeDocument: async (id: string): Promise<{ message: string }> => {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Not authenticated');
    }
    
    const response = await fetch(`${API_URL}/nlp/analyze/${id}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to analyze document');
    }
    
    return response.json();
  },
  
  checkCompliance: async (id: string, jurisdiction: string = 'uae'): Promise<{ message: string }> => {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Not authenticated');
    }
    
    const response = await fetch(`${API_URL}/compliance/check/${id}?jurisdiction=${jurisdiction}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to check compliance');
    }
    
    return response.json();
  },
  
  getComplianceResults: async (id: string): Promise<any> => {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Not authenticated');
    }
    
    const response = await fetch(`${API_URL}/compliance/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to get compliance results');
    }
    
    return response.json();
  },
};