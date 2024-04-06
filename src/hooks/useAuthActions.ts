
import { useAppDispatch } from './store';

import {
	startLoginWithGithub,
	startLoginWithGoogle,
	startLoginWithEmailAndPassword,
	startCreatingUserWithEmailAndPassword,
} from '@/store/auth';

export const useAuthActions = () => {
	const dispatch = useAppDispatch();

	const loginGoogle = () => {
		dispatch(startLoginWithGoogle());
	};

	const loginGithub = () => {
		dispatch(startLoginWithGithub());
	};

	const regiterEmailAndPassword = ({
		email,
		password,
		displayName,
	}: RegisterEmailPasswordProps) => {
		dispatch(
			startCreatingUserWithEmailAndPassword({ email, password, displayName })
		);
	};

	const loginEmailAndPassword = ({
		email,
		password,
	}: LoginEmailPasswordProps) => {
		dispatch(startLoginWithEmailAndPassword({ email, password }));
	};

	return {
		loginGoogle,
		loginGithub,
		regiterEmailAndPassword,
		loginEmailAndPassword,
	};
};
