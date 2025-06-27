export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SigninFormData {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signin: (data: SigninFormData) => Promise<void>;
  signup: (data: SignupFormData) => Promise<void>;
  signout: () => void;
}