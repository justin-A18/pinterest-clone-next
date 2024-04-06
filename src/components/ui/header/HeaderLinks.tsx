'use client';

import Link from 'next/link';

import { routesNav } from '@/utils/routesNav';
import { usePathname } from 'next/navigation';

export const HeaderLinks = () => {
	const pathname = usePathname();

	return (
		<ul className='flex items-center'>
			{routesNav.map(({ id, route, to }) => (
				<li
					key={id}
					className={`${
						pathname === to ? 'bg-black text-white' : ''
					} font-semibold text-base px-4 py-3 rounded-full transition-all duration-200`}>
					<Link href={to}>{route}</Link>
				</li>
			))}
		</ul>
	);
};
