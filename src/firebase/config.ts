import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyAFKzirVmhVZhWig8fiZ0kujf37feBz9Rg',
	authDomain: 'pinterest-clone-221d3.firebaseapp.com',
	projectId: 'pinterest-clone-221d3',
	storageBucket: 'pinterest-clone-221d3.appspot.com',
	messagingSenderId: '109460737947',
	appId: '1:109460737947:web:d5e8add5cec40b2537db3e',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
