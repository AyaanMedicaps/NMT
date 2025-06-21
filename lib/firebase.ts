import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBna_NcsFGyZ1byISILp2STrWMbfcKD_GY",
  authDomain: "nemetrix-94d32.firebaseapp.com",
  projectId: "nemetrix-94d32",
  storageBucket: "nemetrix-94d32.firebasestorage.app",
  messagingSenderId: "413615486937",
  appId: "1:413615486937:web:8149545e7a379c8bb78bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Log Firebase initialization
console.log('Firebase initialized successfully');
console.log('Project ID:', firebaseConfig.projectId);

export default app; 