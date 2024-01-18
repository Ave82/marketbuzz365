import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'MarketBuzz365',
	description: 'MarketBuzz365 landing page',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<header>
					<p>nav place holder</p>
				</header>
				<main>{children}</main>
				<footer>
					<p>© 2024 MarketBuzz365</p>
				</footer>
			</body>
		</html>
	);
}
