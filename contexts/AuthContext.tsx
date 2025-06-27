// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { authApi, ApiError } from '@/lib/api';

// export interface User {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   fullName: string;
//   phoneNumber: string;
//   token: string;
//   createdAt: Date;
// }

// export interface SignupFormData {
//   fullName: string;
//   phoneNumber: string;
//   email: string;
//   password: string;
// }

// export interface SigninFormData {
//   email: string;
//   password: string;
// }

// export interface AuthResult {
//   success: boolean;
//   error?: string;
// }

// export interface AuthContextType {
//   user: User | null;
//   isLoading: boolean;
//   login: (data: SigninFormData) => Promise<AuthResult>;
//   signup: (data: SignupFormData) => Promise<AuthResult>;
//   signout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Check for existing user session
//     const savedUser = localStorage.getItem('ngbooks-user');
//     const savedToken = localStorage.getItem('ngbooks-token');

//     if (savedUser && savedToken) {
//       try {
//         const userData = JSON.parse(savedUser);
//         setUser({ ...userData, token: savedToken });
//       } catch (error) {
//         // Clear invalid data
//         localStorage.removeItem('ngbooks-user');
//         localStorage.removeItem('ngbooks-token');
//       }
//     }
//   }, []);

//   const login = async (data: SigninFormData): Promise<AuthResult> => {
//     setIsLoading(true);

//     try {
//       const response = await authApi.login(data);

//       // Extract user data from response
//       const userData: User = {
//         id: response.user?.id || '1',
//         email: data.email,
//         firstName: response.user?.firstName || data.email.split('@')[0],
//         lastName: response.user?.lastName || '',
//         fullName: response.user?.fullName || data.email.split('@')[0],
//         phoneNumber: response.user?.phoneNumber || '',
//         token: response.token || response.access_token || '',
//         createdAt: new Date(),
//       };

//       setUser(userData);
//       localStorage.setItem('ngbooks-user', JSON.stringify(userData));
//       localStorage.setItem('ngbooks-token', userData.token);

//       return { success: true };
//     } catch (error) {
//       let errorMessage = 'Login failed. Please try again.';

//       if (error instanceof ApiError) {
//         switch (error.status) {
//           case 401:
//             errorMessage = 'Invalid email or password. Please check your credentials.';
//             break;
//           case 404:
//             errorMessage = 'Account not found. Please check your email or sign up.';
//             break;
//           case 429:
//             errorMessage = 'Too many login attempts. Please try again later.';
//             break;
//           case 0:
//             errorMessage = error.message;
//             break;
//           default:
//             errorMessage = error.message || errorMessage;
//         }
//       }

//       return { success: false, error: errorMessage };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const signup = async (data: SignupFormData): Promise<AuthResult> => {
//     setIsLoading(true);

//     try {
//       const response = await authApi.signup(data);

//       // Extract user data from response
//       const [firstName, ...lastNameParts] = data.fullName.split(' ');
//       const lastName = lastNameParts.join(' ');

//       const userData: User = {
//         id: response.user?.id || '1',
//         email: data.email,
//         firstName: firstName,
//         lastName: lastName,
//         fullName: data.fullName,
//         phoneNumber: data.phoneNumber,
//         token: response.token || response.access_token || '',
//         createdAt: new Date(),
//       };

//       setUser(userData);
//       localStorage.setItem('ngbooks-user', JSON.stringify(userData));
//       localStorage.setItem('ngbooks-token', userData.token);

//       return { success: true };
//     } catch (error) {
//       let errorMessage = 'Registration failed. Please try again.';

//       if (error instanceof ApiError) {
//         switch (error.status) {
//           case 400:
//             errorMessage = 'Invalid information provided. Please check your details.';
//             break;
//           case 409:
//             errorMessage = 'An account with this email already exists. Please sign in instead.';
//             break;
//           case 422:
//             errorMessage = 'Please check your information and try again.';
//             break;
//           case 0:
//             errorMessage = error.message;
//             break;
//           default:
//             errorMessage = error.message || errorMessage;
//         }
//       }

//       return { success: false, error: errorMessage };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const signout = () => {
//     setUser(null);
//     localStorage.removeItem('ngbooks-user');
//     localStorage.removeItem('ngbooks-token');
//     router.push('/signin');
//   };

//   return (
//     <AuthContext.Provider value={{ user, isLoading, login, signup, signout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// --- Types ---
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
  token: string;
  createdAt: Date;
}

export interface SignupFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface SigninFormData {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (data: SigninFormData) => Promise<AuthResult>;
  signup: (data: SignupFormData) => Promise<AuthResult>;
  signout: () => void;
}

// --- API Helpers ---
const BASE_URL = "https://api.ngbookings.com/api";

async function apiLogin(data: SigninFormData) {
  const response = await fetch(`${BASE_URL}/user_auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok)
    throw {
      status: response.status,
      message: result.message || "Login failed",
    };
  return result;
}

async function apiSignup(data: SignupFormData) {
  const response = await fetch(`${BASE_URL}/user_auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok)
    throw {
      status: response.status,
      message: result.message || "Signup failed",
    };
  return result;
}

// --- Context ---
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("ngbooks-user");
    const savedToken = localStorage.getItem("ngbooks-token");
    if (savedUser && savedToken) {
      try {
        const userData = JSON.parse(savedUser);
        setUser({ ...userData, token: savedToken });
      } catch {
        localStorage.removeItem("ngbooks-user");
        localStorage.removeItem("ngbooks-token");
      }
    }
  }, []);

  const login = async (data: SigninFormData): Promise<AuthResult> => {
    setIsLoading(true);
    try {
      const result = await apiLogin(data);
      const userData: User = {
        id: result.user?._id || result.user?.id || "1",
        email: result.user?.email || data.email,
        firstName: result.user?.firstName || data.email.split("@")[0],
        lastName: result.user?.lastName || "",
        fullName: result.user?.fullName || data.email.split("@")[0],
        phoneNumber: result.user?.phoneNumber || "",
        token: result.token || result.access_token || "",
        createdAt: result.user?.createdAt
          ? new Date(result.user.createdAt)
          : new Date(),
      };
      setUser(userData);
      localStorage.setItem("ngbooks-user", JSON.stringify(userData));
      localStorage.setItem("ngbooks-token", userData.token);
      return { success: true };
    } catch (error: any) {
      let errorMessage = "Login failed. Please try again.";
      switch (error.status) {
        case 401:
          errorMessage =
            "Invalid email or password. Please check your credentials.";
          break;
        case 404:
          errorMessage =
            "Account not found. Please check your email or sign up.";
          break;
        case 429:
          errorMessage = "Too many login attempts. Please try again later.";
          break;
        case 0:
          errorMessage = error.message;
          break;
        default:
          errorMessage = error.message || errorMessage;
      }
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data: SignupFormData): Promise<AuthResult> => {
    setIsLoading(true);
    try {
      const result = await apiSignup(data);
      const [firstName, ...lastNameParts] = data.fullName.trim().split(" ");
      const lastName = lastNameParts.join(" ");
      const userData: User = {
        id: result.user?._id || result.user?.id || "1",
        email: result.user?.email || data.email,
        firstName,
        lastName,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        token: result.token || result.access_token || "",
        createdAt: result.user?.createdAt
          ? new Date(result.user.createdAt)
          : new Date(),
      };
      setUser(userData);
      localStorage.setItem("ngbooks-user", JSON.stringify(userData));
      localStorage.setItem("ngbooks-token", userData.token);
      return { success: true };
    } catch (error: any) {
      let errorMessage = "Registration failed. Please try again.";
      switch (error.status) {
        case 400:
          errorMessage =
            "Invalid information provided. Please check your details.";
          break;
        case 409:
          errorMessage =
            "An account with this email already exists. Please sign in instead.";
          break;
        case 422:
          errorMessage = "Please check your information and try again.";
          break;
        case 0:
          errorMessage = error.message;
          break;
        default:
          errorMessage = error.message || errorMessage;
      }
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("ngbooks-user");
    localStorage.removeItem("ngbooks-token");
    router.push("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
