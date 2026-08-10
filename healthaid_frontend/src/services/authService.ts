import api from './api';

export interface RegisterPayload {
  full_name: string;
  email: string;
  phone_number: string;
  role: 'PATIENT' | 'DOCTOR';
  password: string;
  confirm_password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export const authService = {
  register: async (payload: RegisterPayload) => {
    const response = await api.post('/auth/register/', payload);
    return response.data;
  },

  // Call POST /api/auth/login/
  login: async (payload: LoginPayload) => {
    const response = await api.post('/auth/login/', payload);
    return response.data; // Returns { user, tokens: { access, refresh } }
  },
};