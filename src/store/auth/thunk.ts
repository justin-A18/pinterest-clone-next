import { Dispatch } from '@reduxjs/toolkit';
import {
	loginWithEmailPassword,
	registerUserWithEmailPassword,
	singInWithGithub,
	singInWithGoogle,
} from '@/firebase/providers';
import { checkignCredentials, login, logout } from './authSlice';

export const startLoginWithGoogle = () => {
	return async (dispatch: Dispatch) => {
		dispatch(checkignCredentials());

		try {
			const { displayName, email, photoURL, uid, ok, errorMessage } =
				await singInWithGoogle();

			if (!ok) throw new Error(errorMessage);

			dispatch(
				login({
					uid: uid ?? '',
					displayName: displayName ?? '',
					email: email ?? '',
					photoURL: photoURL ?? '',
				})
			);
		} catch (error) {
			const err = error as Error;
			dispatch(logout({ errorMessage: err.message }));
		}
	};
};

export const startLoginWithGithub = () => {
	return async (dispatch: Dispatch) => {
		dispatch(checkignCredentials());

		try {
			const { displayName, email, photoURL, uid, ok, errorMessage } =
				await singInWithGithub();

			if (!ok) throw new Error(errorMessage);

			dispatch(
				login({
					uid: uid ?? '',
					displayName: displayName ?? '',
					email: email ?? '',
					photoURL: photoURL ?? '',
				})
			);
		} catch (error) {
			const err = error as Error;
			dispatch(logout({ errorMessage: err.message }));
		}
	};
};

export const startCreatingUserWithEmailAndPassword = ({
	email,
	password,
	displayName,
}: RegisterEmailPasswordProps) => {
	return async (dispatch: Dispatch) => {
		try {
			const { ok, errorMessage } = await registerUserWithEmailPassword({
				email,
				password,
				displayName,
			});

			if (!ok) throw new Error(errorMessage);
		} catch (error) {
			const err = error as Error;
			dispatch(logout({ errorMessage: err.message }));
		}
	};
};

export const startLoginWithEmailAndPassword = ({
	email,
	password,
}: LoginEmailPasswordProps) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(checkignCredentials());

			const { ok, errorMessage, displayName, uid } =
				await loginWithEmailPassword({
					email,
					password,
				});

			if (!ok) throw new Error(errorMessage);

			dispatch(
				login({
					uid: uid ?? '',
					displayName: displayName ?? '',
					email: email ?? '',
					photoURL: null,
				})
			);
		} catch (error) {
			const err = error as Error;
			dispatch(logout({ errorMessage: err.message }));
		}
	};
};
