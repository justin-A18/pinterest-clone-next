'use client';

import { Header } from '@/components/ui';
import { useAppSelector } from '@/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ManagerLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { status } = useAppSelector((state) => state.auth);
	const router = useRouter();

	useEffect(() => {
		if (status === 'not-autenticated') {
			router.push('/auth/login');
		}
	}, [status, router]);

	return (
		<>
			<Header />
			{children}
		</>
	);
}
