import {
	User,
	AuthError,
	updateProfile,
	UserCredential,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const singInWithGoogle = async (): Promise<SignInResult> => {
	try {
		const result: UserCredential = await signInWithPopup(
			firebaseAuth,
			googleProvider
		);
		const { displayName, photoURL, email, uid } = result.user;

		return {
			ok: true,
			uid,
			email,
			photoURL,
			displayName,
		};
	} catch (error) {
		const err = error as AuthError;

		return {
			ok: false,
			errorMessage: err.message,
		};
	}
};

export const singInWithGithub = async (): Promise<SignInResult> => {
	try {
		const result: UserCredential = await signInWithPopup(
			firebaseAuth,
			githubProvider
		);

		const { displayName, photoURL, email, uid } = result.user;

		return {
			ok: true,
			uid,
			email,
			photoURL,
			displayName,
		};
	} catch (error) {
		const err = error as AuthError;

		return {
			ok: false,
			errorMessage: err.message,
		};
	}
};

export const registerUserWithEmailPassword = async ({
	email,
	password,
	displayName,
}: RegisterEmailPasswordProps): Promise<RegisterResult> => {
	try {
		await createUserWithEmailAndPassword(firebaseAuth, email, password);

		await updateProfile(firebaseAuth.currentUser as User, {
			displayName,
		});

		return {
			ok: true,
		};
	} catch (error) {
		const err = error as AuthError;
p
		return {
			ok: false,
			errorMessage: err.message,
		};
	}
};

export const loginWithEmailPassword = async ({
	email,
	password,
}: LoginEmailPasswordProps): Promise<SignInResult> => {
	try {
		const res: UserCredential = await signInWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);

		const { uid, photoURL, displayName } = res.user;

		return {
			ok: true,
			uid,
			email,
			photoURL,
			displayName,
		};
	} catch (error) {
		const err = error as AuthError;

		return {
			ok: false,
			errorMessage: err.message,
		};
	}
};

export const logoutFirebase = async () => {
	await firebaseAuth.signOut();
};