'use client';

import { useAppSelector } from '@/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { status } = useAppSelector((state) => state.auth);
	const router = useRouter();

	useEffect(() => {
		if (status === 'authenticated') {
			router.push('/manager');
		}
	}, [status, router]);

	return (
		<main className='w-full h-screen bg-slate-100 flex items-center justify-center'>
			<section className='max-w-md w-[90%] md:w-full bg-white p-4 sm:p-8 flex flex-col gap-8 rounded-lg shadow-xl'>
				<header className='flex items-center flex-col gap-2'>
					<Image
						src='/pinterest.svg'
						alt='pinterest'
						width={50}
						height={50}
					/>
					<h1 className='text-center text-2xl sm:text-3xl font-bold text-zinc-800'>
						Bienvenido a Pinterest
					</h1>
					<p className='text-center text-base sm:text-lg'>
						Encuentra nuevas ideas para probar
					</p>
				</header>

				{children}
			</section>
		</main>
	);
}
