import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBna_NcsFGyZ1byISILp2STrWMbfcKD_GY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "nemetrix-94d32.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "nemetrix-94d32",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "nemetrix-94d32.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "413615486937",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:413615486937:web:8149545e7a379c8bb78bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Log Firebase initialization (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Firebase initialized successfully');
  console.log('Project ID:', firebaseConfig.projectId);
}

export default app; 