import { ReduxProvider } from '@/providers';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
	title: 'Pinterest Clone',
	description: 'Projecto realizado como practica',
	icons: {
		icon: '/pinterest.svg',
	},
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={inter.className}
				suppressHydrationWarning={true}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
