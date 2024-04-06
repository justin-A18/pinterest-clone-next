import { HeaderIcon, HeaderLinks, HeaderProfile, SearchForm } from './';

export const Header = () => {
	return (
		<header className='w-full min-h-20 pl-7 pr-4 py-4'>
			<nav className='flex items-center justify-between gap-4'>
				<HeaderIcon />
				<HeaderLinks />
				<SearchForm />
				<HeaderProfile />
			</nav>
		</header>
	);
};
