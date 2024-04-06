type Routes = '/manager' | '/manager/create' | '/manager/explore' | '/manager/profile';

interface RoutesNav {
	id: number;
	to: Routes;
	route: string;
}

interface SignInResult {
	ok: boolean;
	uid?: string;
	email?: string | null;
	photoURL?: string | null;
	displayName?: string | null;
	errorMessage?: string;
}

interface RegisterResult extends SignInResult {}

interface RegisterEmailPasswordProps {
	email: string;
	password: string;
	displayName?: string;
}

interface LoginEmailPasswordProps extends RegisterEmailPasswordProps {}
