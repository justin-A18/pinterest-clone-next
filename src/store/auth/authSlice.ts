import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Status = 'authenticated' | 'not-autenticated' | 'checking';

export interface AuthState {
	status: Status;
	uid: string | null;
	email: string | null;
	photoURL: string | null;
	displayName: string | null;
	errorMessage: string | null;
}

interface Login {
	uid: string | null;
	email: string | null;
	photoURL: string | null;
	displayName: string | null;
}

interface Logout {
	errorMessage: string;
}

const initialState: AuthState = {
	status: 'not-autenticated',
	uid: null,
	email: null,
	photoURL: null,
	displayName: null,
	errorMessage: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<Login>) => {
			const { displayName, email, photoURL, uid } = action.payload;

			state.status = 'authenticated';
			state.uid = uid;
			state.email = email;
			state.photoURL = photoURL;
			state.displayName = displayName;
			state.errorMessage = null;
		},
		logout: (state, action: PayloadAction<Logout>) => {
			const { errorMessage } = action.payload;

			state.status = 'not-autenticated';
			state.uid = null;
			state.email = null;
			state.photoURL = null;
			state.displayName = null;
			state.errorMessage = errorMessage;
		},
		checkignCredentials: (state) => {
			state.status = 'checking';
		},
	},
});

export const { login, logout, checkignCredentials } = authSlice.actions;
